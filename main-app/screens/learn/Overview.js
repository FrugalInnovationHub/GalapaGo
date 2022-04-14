import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Linking,
  SafeAreaView
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
import { ListItem, Separator } from "native-base";
import LearnHeader from "./LearnHeader";

//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

class Overview extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <LearnHeader
            subTitle="Galapagos Overview"
            goBack={() => {
              // eslint-disable-next-line react/prop-types
              this.props.navigation.goBack();
            }}
          />
          <View style={styles.spaceP}>
            <Collapse>
              <CollapseHeader>
                <Separator bordered style={styles.dropHeader}>
                  <Text style={styles.dropHeaderText}>
                    Airports of Quito and Guayaquil
                  </Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem>
                  <View>
                    <Text style={styles.dropBodyText}>
                      In the airports of Quito and Guayaquil prior to the
                      check-in with your airline you must:{"\n"}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>Step 1:</Text>{" "}
                      Register with the Galapagos Government Council Office to
                      obtain your Transit Control Card (TCT) cost of the TCT is
                      $20.00{"\n"}
                      {"\n"}
                      <Text
                        style={{ fontWeight: "bold" }}
                        onPress={() =>
                          Linking.openURL(
                            "https://siiws.gobiernogalapagos.gob.ec/siicgg_web/"
                          )
                        }
                      >
                        Fill out the Previous Registration Form for the TCT here{" "}
                      </Text>
                      {"\n"}
                      {"\n"}
                      <Text
                        style={{ fontWeight: "bold" }}
                        onPress={() =>
                          Linking.openURL(
                            "https://siiws.gobiernogalapagos.gob.ec/siicgg_web/"
                          )
                        }
                      >
                        Fill out the New Registration Form for the TCT here{" "}
                      </Text>
                      {"\n"}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>Step 2:</Text> Check
                      your baggage in the Galapagos ABG Biosecurity Control and
                      Regulation Agency{"\n"}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>Step 3:</Text> At
                      Baltra and San Cristobal airports: As an entrance tax to
                      the protected areas of Galapagos, an entrance tax will be
                      charged, the prices of which are detailed below:{"\n"}
                    </Text>
                    <View>
                      <Image
                        source={require("../../app/assets/images/image_tct.jpg")}
                        style={{
                          alignSelf: "center",
                          height: 320 * rem,
                          width: 320 * rem
                        }}
                        resizeMode="stretch"
                      />
                    </View>
                    <Text style={styles.dropBodyText}>
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>Step 4:</Text> An ABG
                      inspector from the Agency for the Regulation and Control
                      of Biosecurity for Galapagos will check your suitcase to
                      make sure that no organic products that may bring
                      organisms that threaten the Galapagos ecosystems are
                      entering.
                    </Text>
                  </View>
                </ListItem>
              </CollapseBody>
            </Collapse>
            <Collapse>
              <CollapseHeader>
                <Separator bordered style={styles.dropHeader}>
                  <Text style={styles.dropHeaderText}>
                    Landing in Baltra airport GPS
                  </Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem>
                  <View>
                    <Text style={styles.dropBodyText}>
                      <Text style={{ fontWeight: "bold" }}>
                        The route to Puerto is as follows
                      </Text>{" "}
                      {"\n"}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>Step 1:</Text> You
                      need to buy a Lobito ticket for the bus ($5.00) The bus
                      will take you from Baltra airport to the Canal Itabaca,
                      which separates the islands of Baltra and Santa Cruz, this
                      tour takes approximately 10 minutes.{"\n"}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>Step 2:</Text> The
                      Itabaca canal is crossed by barge, it has a cost of $1.00
                      {"\n"}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>Step 3:</Text> Once
                      on the island of Santa Cruz, to get to Puerto Ayora, there
                      are two options: {"\n"}
                    </Text>
                    <Text style={styles.sublist}>
                      <Text style={{ fontWeight: "bold" }}>1. Take a bus</Text>,
                      it costs $5 to the center of town in 45 minutes.{"\n"}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>2. Take a taxi</Text>
                      , which is a white double-cab pickup truck with a maximum
                      capacity of 4 passengers It costs $25 for all occupants
                      and takes a little less time.
                    </Text>
                    <Image
                      source={require("../../app/assets/images/Baltra.jpg")}
                      style={{
                        alignSelf: "center",
                        marginTop: 15,
                        height: 150 * rem,
                        width: 320 * rem
                      }}
                      resizeMode="stretch"
                    />
                  </View>
                </ListItem>
              </CollapseBody>
            </Collapse>
            <Collapse>
              <CollapseHeader>
                <Separator bordered style={styles.dropHeader}>
                  <Text style={styles.dropHeaderText}>
                    Landing in San Cristobal airport SCY
                  </Text>
                </Separator>
              </CollapseHeader>
              <CollapseBody>
                <ListItem>
                  <View>
                    <Text style={styles.dropBodyText}>
                      In San Cristobal island the airport is located 10 minutes
                      from Puerto Baquerizo Moreno, you can take a bus or a taxi
                      to the center of town. {"\n"}
                      {"\n"}The approximate price is between $1.50 and $3
                      depending on the distance to your final stop.
                    </Text>
                    <Image
                      source={require("../../app/assets/images/SanCristobal.jpg")}
                      style={{
                        alignSelf: "center",
                        marginTop: 15,
                        height: 200 * rem,
                        width: 320 * rem
                      }}
                      resizeMode="stretch"
                    />
                  </View>
                </ListItem>
              </CollapseBody>
            </Collapse>
            <Text style={styles.bodyText}>
              <Text style={{ fontWeight: "bold" }}>
                Guidelines for the entry of tourists to the province of
                Galapagos, in the context of the Health emergency due to
                Covid-19
              </Text>
              {"\n"}
              {"\n"}
              If you travel to Galapagos, you should know that:{"\n"}
              {"\n"}
              <Text style={{ fontWeight: "bold" }}>
                1. Entry to the province is regulated
              </Text>
              {"\n"}
              {"\n"}
              2. There are immigration categories:{" "}
              <Text style={{ fontWeight: "bold" }}>
                Permanent Residents, Temporary Residents, Tourists and Passersby
              </Text>
              {"\n"}
              {"\n"}
              <Text style={{ fontWeight: "bold" }}>
                3. For the category of tourists, a SALVOCONDUCTO is required
              </Text>
              , issued by a travel agency, tour operator or accommodation
              establishment regulated in the province.
            </Text>
            <Image
              source={require("../../app/assets/images/Covid19.jpg")}
              style={{
                alignSelf: "center",
                height: 250 * rem,
                width: 320 * rem,
                marginBottom: 15
              }}
              resizeMode="stretch"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Overview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  bodyText: {
    fontSize: 17 * rem,
    color: "#616161",
    padding: 34,
    lineHeight: 22 * rem
  },
  dropHeader: {
    backgroundColor: "#FFF6DE",
    height: 50 * rem,
    borderColor: "#FFCE4F",
    borderBottomWidth: 2
  },
  dropHeaderText: {
    fontSize: 17 * rem,
    paddingLeft: 16,
    fontWeight: "bold"
  },
  dropBodyText: {
    fontSize: 17 * rem,
    color: "#616161",
    lineHeight: 22 * rem,
    paddingLeft: 16
  },

  sublist: {
    fontSize: 17 * rem,
    color: "#616161",
    lineHeight: 22 * rem,
    paddingLeft: 26
  },

  spaceP: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  }
});
