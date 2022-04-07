//LearnSection imports
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";

import Learn from "../screens/learn/Learn";
import AboutUs from "../screens/learn/AboutUs";
import History from "../screens/learn/history/History";
import People from "../screens/learn/history/People";
import Timeline from "../screens/learn/history/Timeline";
import Fauna from "../screens/learn/science/Fauna";
import Flora from "../screens/learn/science/Flora";
import NewSpecies from "../screens/learn/science/NewSpecies";
import Protect from "../screens/learn/science/Protect";
import ScienceAndSus from "../screens/learn/science/ScienceAndSus";
import EndangeredSpecies from "../screens/learn/science/EndangeredSpecies";
import Overview from "../screens/learn/Overview";

const LearnSection = createStackNavigator({
  Learn: { screen: Learn },
  AboutUs: { screen: AboutUs },
  History: { screen: History },
  Overview: { screen: Overview },
  People: { screen: People },
  Timeline: { screen: Timeline },
  ScienceAndSus: { screen: ScienceAndSus },
  Fauna: { screen: Fauna },
  Flora: { screen: Flora },
  NewSpecies: { screen: NewSpecies },
  Protect: { screen: Protect },
  EndangeredSpecies: { screen: EndangeredSpecies }
});

LearnSection.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Learn",
    tabBarIcon: ({ tintcolor }) => (
      <Image
        source={require("../app/assets/icons/bulb.png")}
        style={{ width: 30, height: 30 }}
      />
    )
  };
};

export default LearnSection;
