import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function ActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        zIndex: 1,
        opacity: 0.7,
      }}
    >
      <LottieView
        loop
        autoPlay
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          marginTop: 80,
        }}
        source={require("../assets/animations/loader.json")}
      />
    </View>
    // </Screen>
  );
}

export default ActivityIndicator;
