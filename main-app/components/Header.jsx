/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, color, subTitle, goBack, icon }) => {
  const onPress = useCallback(() => {
    goBack && goBack();
  }, [goBack]);
  return (
    <View style={styles.container}>
      <View style={[styles.labelWraper, { backgroundColor: color }]}>
        <View style={styles.label}>
          <View style={styles.iconWrapper}>{icon}</View>
          <Text style={styles.labelText}>{title}</Text>
        </View>
      </View>
      <View style={[styles.navigationBar, { borderBottomColor: color }]}>
        {subTitle && (
          <TouchableOpacity style={styles.goBack} onPress={onPress}>
            <AntDesign
              name="left"
              size={15}
              color="#464646"
              style={styles.goBackIcon}
            />
            <Text style={styles.goBackText}>Back</Text>
          </TouchableOpacity>
        )}
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
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
  iconWrapper: { marginLeft: 30, width: 40 },
  labelText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 9
  },
  navigationBar: { minHeight: 60, borderBottomWidth: 5 },
  subTitle: {
    fontWeight: "700",
    color: "#000000",
    fontSize: 20,
    marginLeft: 30
  },
  goBackIcon: { width: 20 },
  goBack: {
    flexDirection: "row",
    paddingTop: 8,
    paddingLeft: 10,
    alignItems: "center",
    width: 120
  },
  goBackText: {
    color: "#464646",
    fontSize: 15,
    fontWeight: "400"
  }
});
