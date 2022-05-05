import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "../components";
import Home from "../screens/Home/home";
import Maps from "../screens/Home/Maps";

import showMap from "../screens/Home/IslandMaps/showMap";

const HomeSection = createStackNavigator(
  {
    Home: { screen: Home },
    Maps: { screen: Maps },
    showMap: { screen: showMap }
  },
  { headerMode: "none" }
);

HomeSection.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintcolor }) => <Icon name="home" size={28} />,
    tabBarOptions: {
      activeTintColor: "#000000",
      inactiveTintColor: "#919196"
    }
  };
};

export default HomeSection;
