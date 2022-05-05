import React from "react";
import { StyleSheet, Text } from "react-native";

const Empty = () => {
  return <Text style={styles.container}>Nothing here yet!</Text>;
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    marginLeft: 34,
    fontSize: 15,
    marginVertical: 10
  }
});
