import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";

import Favorites from "../screens/favorites/Favorites";

const FavoritesSection = createStackNavigator({
  Favorites: { screen: Favorites }
});

FavoritesSection.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Favorites",
    tabBarIcon: ({ tintcolor }) => (
      <Image
        source={require("../app/assets/icons/heartlogo.png")}
        style={{ width: 30, height: 30 }}
      />
    )
  };
};

export default FavoritesSection;
