import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import FavoritesHeader from "./FavoritesHeader";
import globalStateContext from "../../context/globalContext";
import { isEmpty } from "../../utils";
import { Empty, Label, Icon, Card } from "../../components";
import { addFavorite, getImages } from "../../utils";
import hotelImages from "../../assets/img/hotels";
import restaurantImages from "../../assets/img/restaurants";
import agenciesImages from "../../assets/img/travel-agencies";
import transportImages from "../../assets/img/transport";
class Favorites extends React.Component {
  static contextType = globalStateContext;
  render() {
    const { favorites } = this.context;
    const { agencies, hotels, restaurants, travels } = favorites;

    const _isEmpty =
      isEmpty(agencies) &&
      isEmpty(hotels) &&
      isEmpty(restaurants) &&
      isEmpty(travels);

    const hotelKeys = Object.keys(hotels);
    const restaurantKeys = Object.keys(restaurants);
    const agencyKeys = Object.keys(agencies);
    const travelKeys = Object.keys(travels);
    return (
      <SafeAreaView style={styles.container}>
        <FavoritesHeader />
        <ScrollView>
          {_isEmpty && <Empty />}

          {!isEmpty(hotels) && (
            <View>
              <Label icon={<Icon name="hotels" size={27} />} title={"Hotel"} />
              {hotelKeys.map((key) => {
                const hotel = hotels[key];
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
                    isFavorite
                  />
                );
              })}
            </View>
          )}
          {!isEmpty(restaurants) && (
            <View>
              <Label
                icon={<Icon name="food-and-drinks" size={25} />}
                title={"Food"}
              />
              {restaurantKeys.map((key) => {
                const restaurant = restaurants[key];

                const localImages =
                  restaurantImages[restaurant.LocalImages.folderName].images;

                const { Image } = restaurant;
                const imageSouce = getImages(Image, localImages);
                return (
                  <Card
                    key={key}
                    name={restaurant.Name}
                    phoneNo={restaurant.PhoneNo}
                    position={{
                      latitude: restaurant.Latitude,
                      longitude: restaurant.Longitude
                    }}
                    website={restaurant.Website}
                    email={restaurant.Email}
                    images={imageSouce}
                    addFavorite={() =>
                      addFavorite(this.context, "restaurants", key, restaurant)
                    }
                    isFavorite
                  />
                );
              })}
            </View>
          )}
          {!isEmpty(travels) && (
            <View>
              <Label
                icon={<Icon name="island-hop" size={27} />}
                title={"Island-hop"}
              />

              {travelKeys.map((key) => {
                const transport = travels[key];
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
                    addFavorite={() =>
                      addFavorite(this.context, "travels", key, transport)
                    }
                    isFavorite
                  />
                );
              })}
            </View>
          )}
          {!isEmpty(agencies) && (
            <View>
              <Label
                icon={<Icon name="agencies" size={27} />}
                title={"Agencies"}
              />
              {agencyKeys.map((key) => {
                const agency = agencies[key];

                const localImages =
                  agenciesImages[agency.LocalImages.folderName].images;
                const { Image } = agency;
                const imageSouce = getImages(Image, localImages);

                return (
                  <Card
                    key={key}
                    name={agency.Name}
                    phoneNo={agency.PhoneNo}
                    position={{
                      latitude: agency.Latitude,
                      longitude: agency.Longitude
                    }}
                    website={agency.Website}
                    email={agency.Email}
                    images={imageSouce}
                    addFavorite={() =>
                      addFavorite(this.context, "agencies", key, agency)
                    }
                    isFavorite
                  />
                );
              })}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
