/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ title, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.labelWraper, { backgroundColor: color }]}>
        <View style={styles.label}>
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={40}
            color="white"
            style={{ marginLeft: 30 }}
          />
          <Text style={styles.labelText}>{title}</Text>
        </View>
      </View>
      <View
        style={[
          styles.navigationBar,
          { borderBottomColor: color, borderBottomWidth: 5 }
        ]}
      ></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  labelWraper: {
    height: 85,
    justifyContent: "center"
  },
  label: { flexDirection: "row" },
  icon: { marginLeft: 30 },
  labelText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 9
  },
  navigationBar: { height: 60 }
});
