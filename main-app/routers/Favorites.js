import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";

import Favorites from "../screens/favorites/Favorites";

const FavoritesSection = createStackNavigator(
  {
    Favorites: { screen: Favorites }
  },
  {
    headerMode: "none"
  }
);

FavoritesSection.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Favorites",
    tabBarIcon: ({ tintcolor }) => {
      console.log("show color", tintcolor);
      return (
        <Image
          source={require("../app/assets/icons/heartlogo.png")}
          style={{ width: 30, height: 30 }}
        />
      );
    },
    tabBarOptions: {
      // activeTintColor: "#e91e63",
      // inactiveTintColor: "gray"
    }
  };
};

export default FavoritesSection;
