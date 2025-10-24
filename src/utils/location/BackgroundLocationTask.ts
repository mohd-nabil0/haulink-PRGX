import * as ExpoLocation from "expo-location";
import * as TaskManager from "expo-task-manager";
import { LocationEmitter } from "./LocationEmitter";

const LOCATION_TASK = "BACKGROUND_LOCATION_TASK";

// Define what happens each time new location data arrives
TaskManager.defineTask(
  LOCATION_TASK,
  async (
    task: TaskManager.TaskManagerTaskBody<{
      locations: ExpoLocation.LocationObject[];
    }>
  ) => {
      const { data, error } = task;
      if (error) {
        console.error("Background task error:", error);
        return;
      }

      if (data && data.locations) {
        for (const location of data.locations) {
          LocationEmitter.emit("locationUpdate", location);
        }
      }
  }
);

export const startBackgroundTracking = async (): Promise<void> => {
  //TODO this location coords should capture from MAPBox
  const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
  const { status: bgStatus } =
    await ExpoLocation.requestBackgroundPermissionsAsync();

  if (status !== "granted" || bgStatus !== "granted") {
    console.warn("Location permission not granted");
    return;
  }

  const isRunning = await ExpoLocation.hasStartedLocationUpdatesAsync(
    LOCATION_TASK
  );
  if (!isRunning) {
    await ExpoLocation.startLocationUpdatesAsync(LOCATION_TASK, {
      accuracy: ExpoLocation.Accuracy.High,
      //   distanceInterval: 50, // meters before next update
      //   timeInterval: 30000, // 30s between updates
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: "Tracking location",
        notificationBody: "Your location is being tracked in the background.",
      },
    });
  }
};

export const stopBackgroundTracking = async (): Promise<void> => {
  const isRunning = await ExpoLocation.hasStartedLocationUpdatesAsync(
    LOCATION_TASK
  );
  if (isRunning) {
    await ExpoLocation.stopLocationUpdatesAsync(LOCATION_TASK);
  }
};
