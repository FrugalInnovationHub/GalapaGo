import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const IcoMoon = createIconSetFromIcoMoon(
  require("../assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

// eslint-disable-next-line react/prop-types
const Icon = ({ name, size, color }) => {
  console.log("show", name, size);
  const [fontsLoaded] = useFonts({
    IcoMoon: require("../assets/icomoon/icomoon.ttf")
  });
  if (!fontsLoaded) {
    return <Text>loading</Text>;
  }

  return (
    <View style={styles.container}>
      <IcoMoon name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "red"
  }
});

export default Icon;
