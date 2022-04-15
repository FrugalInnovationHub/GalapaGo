import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { NavigationButton, Icon } from "../../components";
import ExploreHeader from "./ExploreHeader";

class Explore extends React.Component {
  constructor() {
    super();
    this.buttons = [
      {
        id: 1,
        name: "Top Activity",
        navigatePath: "TopActivities",
        icon: <Icon name="top-activities" size={26} color={styles.icon.color} />
      },
      {
        id: 2,
        name: "Travel Agencies",
        navigatePath: "TravelAgencies",
        icon: <Icon name="agencies" size={28} color={styles.icon.color} />
      },
      {
        id: 3,
        name: "Hotels",
        navigatePath: "SantaCruzHotels",
        icon: <Icon name="hotels" size={28} color={styles.icon.color} />
      },
      {
        id: 4,
        name: "Food & Drinks",
        navigatePath: "SantaCruzFood",
        icon: (
          <Icon name="food-and-drinks" size={28} color={styles.icon.color} />
        )
      },
      {
        id: 5,
        name: "Want to Island Hop",
        navigatePath: "IslandHop",
        icon: <Icon name="island-hop" size={24} color={styles.icon.color} />
      }
    ];
  }

  navigate(pageName) {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate(pageName);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ExploreHeader />
          {this.buttons.map(({ id, name, navigatePath, icon }) => (
            <NavigationButton
              key={id}
              label={name}
              onPress={() => this.navigate(navigatePath)}
              icon={icon}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  icon: {
    color: "#8B8B8B"
  },
  scrollView: { backgroundColor: "#FFFFFF" }
});
