import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";

import Home from "../screens/Home/home";
import RelevantInformation from "../screens/Home/RelevantInformation";
import Maps from "../screens/Home/Maps";
import Overview from "../screens/Home/Overview";
import showMap from "../screens/Home/IslandMaps/showMap";

const HomeSection = createStackNavigator(
  {
    Home: { screen: Home },
    RelevantInformation: { screen: RelevantInformation },
    Maps: { screen: Maps },
    Overview: { screen: Overview },
    showMap: { screen: showMap }
  },
  { headerMode: "none" }
);

HomeSection.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Home",
    headerVisible: false,
    transparentHeader: {
      position: "absolute",
      backgroundColor: "transparent",
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    },
    tabBarIcon: ({ tintcolor }) => (
      <Image
        source={require("../app/assets/icons/turtle-1.png")}
        style={{ width: 30, height: 30 }}
      />
    )
  };
};

export default HomeSection;
