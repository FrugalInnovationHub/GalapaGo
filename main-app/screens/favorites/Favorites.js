import "react-native-gesture-handler";
import * as React from "react";
import { LogBox, SafeAreaView } from "react-native";
import FavoritesHeader from "./FavoritesHeader";
LogBox.ignoreLogs(["Unhandled promise rejection"]);
console.warn = () => {};

import { StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});

class Favorites extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FavoritesHeader />
        <ScrollView></ScrollView>
      </SafeAreaView>
    );
  }
}

export default Favorites;
