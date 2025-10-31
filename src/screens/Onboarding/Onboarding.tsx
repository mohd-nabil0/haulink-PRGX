import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import HeaderWithBackButtonAndText from "@/components/Headers/HeaderWithBackButtonAndText";
import useSafeArea from "@/hooks/useSafeArea";
import themedStyles from "./styles";

const Onboarding = () => {
  const theme = useTheme();
  const safeAreaStyles = useSafeArea();
  const styles = themedStyles(theme);

  return (
    <View style={[styles.container, safeAreaStyles]}>
      <HeaderWithBackButtonAndText />
      <Text>sdfhsdkjfhkfjdh</Text>
    </View>
  );
};

export default Onboarding;

