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

//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

class Home extends React.Component {
  // videoBuffer = (isBuffer) =>{
  //
  //
  //   console.log(isBuffer)
  //   //here you could set the isBuffer value to the state and then do something with it
  //   //such as show a loading icon
  // }

  navigate(pageName) {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../app/assets/images/Main.png")}
            style={{ width: entireScreenWidth, height: 200 }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.navigate("RelevantInformation")}
          >
            <View style={styles.buttonLeft}>
              <Image
                source={require("../../app/assets/icons/info.jpg")}
                style={{ width: 33 * rem, height: 25 * rem }}
              />
              <Text style={styles.buttonText}>Galapagos Overview</Text>
            </View>
            <View style={styles.buttonRight}>
              <Image
                source={require("../../app/assets/icons/chevron.png")}
                style={styles.chevron}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lastButtonContainer}
            onPress={() => this.navigate("Maps")}
          >
            <View style={styles.buttonLeft}>
              <Image
                source={require("../../app/assets/icons/Map.png")}
                style={{ width: 31 * rem, height: 27 * rem }}
              />
              <Text style={styles.buttonText}>Maps</Text>
            </View>
            <View style={styles.buttonRight}>
              <Image
                source={require("../../app/assets/icons/chevron.png")}
                style={styles.chevron}
              />
            </View>
            <View style={{ borderBottomWidth: 1 }}></View>
          </TouchableOpacity>
          <Image
            source={require("../../app/assets/images/Ga_withLogo.png")}
            style={{ width: entireScreenWidth, height: 355 * rem }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonText: {
    fontSize: 17 * rem,
    paddingLeft: 16
  },
  buttonContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#C0C0C0",
    paddingVertical: 10,
    paddingLeft: 34,
    paddingRight: 14
  },
  lastButtonContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: "#C0C0C0",
    paddingLeft: 34,
    paddingRight: 14
  },
  buttonLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  chevron: {
    width: 11 * rem,
    height: 18 * rem
  }
});
