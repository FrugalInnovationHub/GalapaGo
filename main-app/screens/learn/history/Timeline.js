import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import LearnHeader from "../LearnHeader";

class Timeline extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <LearnHeader
            subTitle="History / Timeline"
            goBack={() => {
              // eslint-disable-next-line react/prop-types
              this.props.navigation.goBack();
            }}
          />
          <Text style={styles.subHeaderBlue}>1535</Text>
          <Text style={styles.bodyText}>
            Fray Tomás de Berlanga discovers the Galapagos Islands.
          </Text>
          <Text style={styles.subHeaderBlue}>1832</Text>
          <Text style={styles.bodyText}>
            The Republic of Ecuador, takes official possession of Galapagos.
          </Text>
          <Text style={styles.bodyText}>
            The boat “H.M.S. BEAGLE ”arrives in Galapagos after an exploration
            tour around the world. On board, was the young naturalist Charles
            Darwin who within the islands would deduce his revolutionary Theory
            of the Evolution of Species, published in November 1859.
          </Text>
          <Text style={styles.subHeaderBlue}>1934</Text>
          <Text style={styles.bodyText}>
            The first laws of protection of the islands are promulgated.
          </Text>
          <Text style={styles.subHeaderBlue}>1959</Text>
          <Text style={styles.bodyText}>
            The Galapagos Islands are declared National Park.
          </Text>
          <Text style={styles.subHeaderBlue}>1968</Text>
          <Text style={styles.bodyText}>
            For the protection of the biodiversity of the islands, the Galapagos
            National Park Service is created. The Galapagos Islands are part of
            the National System of Protected Areas of Ecuador due to the
            Forestry and Wildlife Conservation Law, promulgated in 1981. Of the
            7,882 km2 of the land area of the archipelago, 97% constitutes the
            Galapagos National Park and the remaining 3% is destined to human
            settlements.
          </Text>
          <Text style={styles.subHeaderBlue}>1979</Text>
          <Text style={styles.bodyText}>
            UNESCO declared the Galapagos Islands a World Heritage Site.
          </Text>
          <Text style={styles.subHeaderBlue}>1985</Text>
          <Text style={styles.bodyText}>
            UNESCO, declared the Biosphere Reserve to the Galapagos Islands.
          </Text>
          <Text style={styles.subHeaderBlue}>1986</Text>
          <Text style={styles.bodyText}>
            The Government of Ecuador creates the Galapagos Marine Resources
            Reserve.
          </Text>
          <Text style={styles.subHeaderBlue}>1990</Text>
          <Text style={styles.bodyText}>
            The Archipelago is declared a Sanctuary of Whales.
          </Text>
          <Text style={styles.subHeaderBlue}>1998</Text>
          <Text style={styles.lastBodyText}>
            The “Law of Special Regime for the Conservation and Sustainable
            Development of the Province of Galapagos” is approved. The marine
            area, declared Galapagos Marine Reserve in 1998, covers an area
            around 133,000 km2 and includes all the interior waters of the
            archipelago and all those contained in 40 nautical miles, measured
            from the baseline of the archipelago. 2001. UNESCO includes the
            Galapagos Marine Reserve in the list of Natural Heritage of
            Humanity.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
export default Timeline;

//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  subHeaderBlue: {
    fontWeight: "600",
    color: "#0C7A80",
    fontSize: 30 * rem,
    paddingLeft: 34,
    paddingTop: 25,
    paddingBottom: 16
  },
  bodyText: {
    fontSize: 17 * rem,
    color: "#616161",
    lineHeight: 22 * rem,
    paddingLeft: 34,
    paddingRight: 34,
    paddingBottom: 16
  },
  lastBodyText: {
    fontSize: 17 * rem,
    color: "#616161",
    lineHeight: 22 * rem,
    paddingLeft: 34,
    paddingRight: 34,
    paddingBottom: 34
  }
});
