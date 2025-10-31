import { useSafeAreaInsets } from "react-native-safe-area-context";

const useSafeArea = () => {
  const insets = useSafeAreaInsets();

  return { paddingTop: insets.top, paddingBottom: insets.bottom };
};

export default useSafeArea;