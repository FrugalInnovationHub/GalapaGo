import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ExploreHeader from "../../ExploreHeader";
import { Card } from "../../../../components";
import hotelImages from "../../../../assets/img/hotels";
import globalStateContext from "../../../../context/globalContext";
import { addFavorite, getImages } from "../../../../utils";
class SantaCruzHotels extends React.Component {
  constructor() {
    super();
  }
  static contextType = globalStateContext;

  render() {
    const { favorites = undefined, database } = this.context;
    const { Hotels } = database;
    const { Hotels_list } = Hotels;
    const propertyNames = Object.keys(Hotels_list);

    return (
      <SafeAreaView style={styles.container}>
        <ExploreHeader
          subTitle="Hotels"
          // eslint-disable-next-line react/prop-types
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
          {propertyNames.map((key) => {
            const hotel = Hotels_list[key];
            const isFavorite = !!favorites.hotels[key];

            const localImages =
              hotelImages[hotel.LocalImages.folderName].images;

            const { Image } = hotel;
            const imageSouce = getImages(Image, localImages);

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
                images={imageSouce}
                addFavorite={() => {
                  addFavorite(this.context, "hotels", key, hotel);
                }}
                isFavorite={isFavorite}
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
