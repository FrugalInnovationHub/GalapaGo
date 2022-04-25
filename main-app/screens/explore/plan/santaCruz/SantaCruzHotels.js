import * as React from "react";
import { StyleSheet, Dimensions, SafeAreaView, ScrollView } from "react-native";
import ExploreHeader from "../../ExploreHeader";
import { Card } from "../../../../components";
import hotelImages from "../../../../assets/img/hotels";
import hotels from "../../../../data/newHotels.json";

class SantaCruzHotels extends React.Component {
  constructor() {
    super();
  }

  render() {
    const propertyNames = Object.keys(hotels.hotels);
    return (
      <SafeAreaView style={styles.container}>
        <ExploreHeader
          subTitle="Hotels"
          // eslint-disable-next-line react/prop-types
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
          {propertyNames.map((key) => {
            const hotel = hotels.hotels[key];
            return (
              <Card
                key={key}
                name={hotel.Name}
                phoneNo={hotel.PhoneNo}
                position={{
                  latitude: hotel.Latitude,
                  longitude: hotel.Longitude
                }}
                website={hotel.Website}
                email={hotel.Email}
                images={hotelImages[hotel.LocalImages.folderName].images}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzHotels;

//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
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
    height: 250 * rem,
    width: Dimensions.get("window").width
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
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
