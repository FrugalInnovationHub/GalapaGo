import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeSection from "./Home";
import LearnSection from "./Learn";
import FavoritesSection from "./Favorites";
import ExploreSection from "./Explore";

const NavigationApp = createBottomTabNavigator({
  Home: HomeSection,
  Learn: LearnSection,
  Explore: ExploreSection,
  Favorites: FavoritesSection
});

export default createAppContainer(NavigationApp);
