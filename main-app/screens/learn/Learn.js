import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Header, NavigationButton } from "../../components";

class Learn extends React.Component {
  constructor() {
    super();
    this.buttons = [
      {
        id: 1,
        name: "About Us",
        navigatePath: "AboutUs",
        icon: <MaterialIcons name="groups" size={28} color="black" />
      },
      {
        id: 2,
        name: "Science & Sustainability",
        navigatePath: "ScienceAndSus",
        icon: <MaterialIcons name="groups" size={28} color="black" />
      },
      {
        id: 3,
        name: "History",
        navigatePath: "History",
        icon: <MaterialIcons name="groups" size={28} color="black" />
      },
      {
        id: 4,
        name: "Galapagos Overview",
        navigatePath: "Overview",
        icon: <MaterialIcons name="groups" size={28} color="black" />
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
          <Header title="Learn" color="#FFB800" />
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

export default Learn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  scrollView: { backgroundColor: "#FFFFFF" }
});
