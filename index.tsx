import "@expo/metro-runtime"; // Necessary for Fast Refresh on Web
import { Amplify } from "aws-amplify";
import { registerRootComponent } from "expo";
import "./gesture-handler";
import awsconfig from "./src/aws/aws-exports";
Amplify.configure({ ...awsconfig });

import App from "./src/App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
