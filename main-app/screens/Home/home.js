import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import HomeImageSwiper from "./HomeImageSwiper";

class Home extends React.Component {
  navigate(pageName) {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HomeImageSwiper />
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 }
});
