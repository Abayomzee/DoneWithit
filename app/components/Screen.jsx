import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  // Data to display
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
