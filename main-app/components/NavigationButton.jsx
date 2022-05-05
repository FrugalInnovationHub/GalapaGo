/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NavigationButton = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        {typeof icon === "object" ? icon : <Text>Icon</Text>}
      </View>
      <Text style={styles.center}>{label}</Text>
      <AntDesign style={styles.right} name="right" size={20} color="#AEAEAE" />
    </TouchableOpacity>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 61,
    borderBottomColor: "#F4F3F3",
    borderBottomWidth: 2,
    alignItems: "center"
  },
  left: {
    marginLeft: 30,
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 9
  },
  right: { marginLeft: "auto", marginRight: 8 }
});
