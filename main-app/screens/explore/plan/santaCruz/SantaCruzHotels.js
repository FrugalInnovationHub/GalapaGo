import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ExploreHeader from "../../ExploreHeader";
import { Card } from "../../../../components";
import hotelImages from "../../../../assets/img/hotels";
import hotels from "../../../../data/newHotels.json";
import globalStateContext from "../../../../context/globalContext";
import { addFavorite } from "../../../../utils";
class SantaCruzHotels extends React.Component {
  constructor() {
    super();
  }
  static contextType = globalStateContext;

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
                addFavorite={() => {
                  addFavorite(this.context, "hotels", key, hotel);
                }}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzHotels;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});
