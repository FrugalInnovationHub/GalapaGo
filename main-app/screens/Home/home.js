import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView
} from "react-native";
import HomeImageSwiper from "./HomeImageSwiper";
//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

class Home extends React.Component {
  // static navigationOptions = {
  //   title: "Home",
  //   headerStyle: {}
  // };

  navigate(pageName) {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeImageSwiper />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 }
});
