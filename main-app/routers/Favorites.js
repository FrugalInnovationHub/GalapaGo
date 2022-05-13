import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "../components";
import Favorites from "../screens/favorites/Favorites";
import { AntDesign } from "@expo/vector-icons";
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
    tabBarLabel: "Saved",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <AntDesign name="heart" size={24} color="#BA2D24" />
      ) : (
        <Icon name="favorites" size={24} color="#231F20" />
      ),
    tabBarOptions: {
      activeTintColor: "#000000",
      inactiveTintColor: "#919196"
    }
  };
};

export default FavoritesSection;
