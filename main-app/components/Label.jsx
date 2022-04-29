/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Label = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {typeof icon === "object" ? icon : <Text>Icon</Text>}
      </View>
      <Text style={styles.center}>{title}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 32,
    marginTop: 20
  },
  left: {
    marginLeft: 30,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18
  },
  center: {
    fontSize: 18,
    color: "#000000",
    marginLeft: 10,
    fontWeight: "700"
  }
});
