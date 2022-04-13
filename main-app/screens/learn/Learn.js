import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Header, NavigationButton, Icon } from "../../components";

class Learn extends React.Component {
  constructor() {
    super();
    this.buttons = [
      {
        id: 1,
        name: "About Us",
        navigatePath: "AboutUs",
        icon: <Icon name="about-us" size={24} color={styles.icon.color} />
      },
      {
        id: 2,
        name: "Science & Sustainability",
        navigatePath: "ScienceAndSus",
        icon: <Icon name="sustainability" size={28} color={styles.icon.color} />
      },
      {
        id: 3,
        name: "History",
        navigatePath: "History",
        icon: <Icon name="history" size={28} color={styles.icon.color} />
      },
      {
        id: 4,
        name: "Galapagos Overview",
        navigatePath: "Overview",
        icon: <Icon name="overview" size={24} color={styles.icon.color} />
      },
      {
        id: 5,
        name: "Useful Phrases for Ecuador",
        navigatePath: "Language",
        icon: <Icon name="useful-phrases" size={23} color={styles.icon.color} />
      },
      {
        id: 6,
        name: "Cultural & Social Norms",
        navigatePath: "Customs",
        icon: <Icon name="cultural-norms" size={26} color={styles.icon.color} />
      },
      {
        id: 7,
        name: "Rules of the National Park",
        navigatePath: "Rules",
        icon: <Icon name="rules" size={26} color={styles.icon.color} />
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
  icon: {
    color: "#8B8B8B"
  },
  scrollView: { backgroundColor: "#FFFFFF" }
});
