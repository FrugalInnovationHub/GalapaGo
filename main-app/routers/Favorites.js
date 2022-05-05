import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";
import { Icon } from "../components";
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
    tabBarIcon: ({ focused }) => {
      if (focused) return <Icon name="favorites" size={24} color="#019934" />;
      return <Icon name="favorites" size={24} color="#231F20" />;
    },
    tabBarOptions: {
      activeTintColor: "#000000",
      inactiveTintColor: "#919196"
    }
  };
};

export default FavoritesSection;
