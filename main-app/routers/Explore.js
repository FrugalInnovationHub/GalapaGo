//ExploreSection imports
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";

import Explore from "../screens/explore/Explore";
import KnowBefore from "../screens/explore/know/KnowBefore";
import Plan from "../screens/explore/plan/Plan";
import TravelAgencies from "../screens/explore/plan/TravelAgencies";
import IslandHop from "../screens/explore/plan/IslandHop";

import TopActivities from "../screens/explore/plan/TopActivities";
import Cycling from "../screens/explore/plan/activities/Cycling";
import Camping from "../screens/explore/plan/activities/Camping";
import Hiking from "../screens/explore/plan/activities/Hiking";
import Cruise from "../screens/explore/plan/activities/Cruise";
import Diving from "../screens/explore/plan/activities/Diving";
import Surfing from "../screens/explore/plan/activities/Surfing";
import Kayaking from "../screens/explore/plan/activities/Kayaking";
import Fishing from "../screens/explore/plan/activities/Fishing";

import SantaCruz from "../screens/explore/plan/santaCruz/SantaCruz";
import SantaCruzFood from "../screens/explore/plan/santaCruz/SantaCruzFood";
import SantaCruzHotels from "../screens/explore/plan/santaCruz/SantaCruzHotels";
import showMap from "../screens/Home/IslandMaps/showMap";

// Island Hop imports
/*import IslandHop from "../screens/explore/plan/islandHop/IslandHop";
import Floreana from "../screens/explore/plan/islandHop/floreana/Floreana";
import FloreanaFood from "../screens/explore/plan/islandHop/floreana/FloreanaFood";
import FloreanaHotels from "../screens/explore/plan/islandHop/floreana/FloreanaHotels";
import FloreanaTop from "../screens/explore/plan/islandHop/floreana/FloreanaTop";

import Isabela from "../screens/explore/plan/islandHop/isabela/Isabela";
import IsabelaFood from "../screens/explore/plan/islandHop/isabela/IsabelaFood";
import IsabelaHotels from "../screens/explore/plan/islandHop/isabela/IsabelaHotels";
import IsabelaTop from "../screens/explore/plan/islandHop/isabela/IsabelaTop";

import SanCristobal from "../screens/explore/plan/islandHop/sanCristobal/SanCristobal";
import SanCristobalFood from "../screens/explore/plan/islandHop/sanCristobal/SanCristobalFood";
import SanCristobalHotels from "../screens/explore/plan/islandHop/sanCristobal/SanCristobalHotels";
import SanCristobalTop from "../screens/explore/plan/islandHop/sanCristobal/SanCristobalTop";

import SantaCruz from "../screens/explore/plan/islandHop/santaCruz/SantaCruz";
import SantaCruzFood from "../screens/explore/plan/islandHop/santaCruz/SantaCruzFood";
import SantaCruzHotels from "../screens/explore/plan/islandHop/santaCruz/SantaCruzHotels";
import SantaCruzTop from "../screens/explore/plan/islandHop/santaCruz/SantaCruzTop";
*/

const ExploreSection = createStackNavigator({
  Explore: { screen: Explore },
  KnowBefore: { screen: KnowBefore },
  Plan: { screen: Plan },
  TravelAgencies: { screen: TravelAgencies },
  IslandHop: { screen: IslandHop },
  TopActivities: { screen: TopActivities },
  Cycling: { screen: Cycling },
  Camping: { screen: Camping },
  Hiking: { screen: Hiking },
  Cruise: { screen: Cruise },
  Diving: { screen: Diving },
  Surfing: { screen: Surfing },
  Kayaking: { screen: Kayaking },
  Fishing: { screen: Fishing },
  /*
    Floreana:{screen: Floreana},
    FloreanaFood: {screen: FloreanaFood},
    FloreanaHotels:{screen:FloreanaHotels},
    FloreanaTop: {screen: FloreanaTop},
    Isabela: {screen: Isabela},
    IsabelaFood : {screen: IsabelaFood},
    IsabelaHotels:{screen: IsabelaHotels},
    IsabelaTop: {screen: IsabelaTop},
    SanCristobal: {screen:SanCristobal},
    SanCristobalFood: {screen: SanCristobalFood},
    SanCristobalHotels: {screen: SanCristobalHotels},
    SanCristobalTop: {screen: SanCristobalTop},
    */
  SantaCruz: { screen: SantaCruz },
  SantaCruzFood: { screen: SantaCruzFood },
  SantaCruzHotels: { screen: SantaCruzHotels }
  /*
    SantaCruzTop: {screen: SantaCruzTop}
    */
});

ExploreSection.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: "Explore",
    tabBarIcon: ({ tintcolor }) => (
      <Image
        source={require("../app/assets/icons/explore.png")}
        style={{ width: 30, height: 30 }}
      />
    )
  };
};

export default ExploreSection;
