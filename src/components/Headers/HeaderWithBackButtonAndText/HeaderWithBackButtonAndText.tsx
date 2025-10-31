import { TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import HeaderBackButtonIcon from "@/assets/images/header-back-icon.svg";
import SvgIcon from "@/components/SvgIcon";
import themedStyles from "./styles";

const HeaderWithBackButtonAndText = ({
  title,
  onBackPress,
}: {
  title?: string;
  onBackPress?: () => void;
}) => {
  const theme = useTheme();
  const styles = themedStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <SvgIcon containerStyle={styles.backButtonContainer}>
          <HeaderBackButtonIcon />
        </SvgIcon>
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};
export default HeaderWithBackButtonAndText;
