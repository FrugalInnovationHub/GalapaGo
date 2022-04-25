import * as React from "react";
import { StyleSheet, Dimensions, SafeAreaView, ScrollView } from "react-native";
import ExploreHeader from "../ExploreHeader";

import transports from "../../../data/transport.json";
import { Card } from "../../../components";
import transportImages from "../../../assets/img/transport";
class IslandHop extends React.Component {
  render() {
    const propertyNames = Object.keys(transports.transports);
    return (
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ExploreHeader
          subTitle="Island Hop"
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
          {propertyNames.map((key) => {
            const transport = transports.transports[key];
            return (
              <Card
                key={key}
                name={transport.Name}
                phoneNo={transport.PhoneNo}
                position={{
                  latitude: transport.Latitude,
                  longitude: transport.Longitude
                }}
                website={transport.Website}
                email={transport.Email}
                images={
                  transportImages[transport.LocalImages.folderName].images
                }
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default IslandHop;

//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 34,
    alignItems: "center"
  },
  headerText: {
    paddingLeft: 16,
    fontSize: 28 * rem,
    fontWeight: "600"
  },
  regularBold: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 17 * rem,
    paddingLeft: 30,
    paddingTop: 16,
    paddingBottom: 16,
    flexWrap: "wrap"
  },
  numberRow: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 34,
    alignItems: "stretch"
  },
  wrapper: {
    height: 200 * rem
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width
  },
  slideImage: {
    height: 200 * rem,
    width: Dimensions.get("window").width
  },
  infoPhone: {
    width: 20 * rem,
    height: 18 * rem
  },
  infoEmail: {
    width: 21 * rem,
    height: 16 * rem
  },
  infoAddress: {
    width: 18 * rem,
    height: 21 * rem
  },
  infoWeb: {
    width: 20 * rem,
    height: 20 * rem
  },
  infoText: {
    fontSize: 17 * rem,
    color: "#616161",
    lineHeight: 20 * rem,
    marginLeft: 10 * rem,
    marginRight: 20 * rem
  },
  numberRow: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  lastRow: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: "center",
    flexWrap: "wrap"
  }
});
