import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import FavoritesHeader from "./FavoritesHeader";
import globalStateContext from "../../context/globalContext";
import { isEmpty } from "../../utils";
import { Empty, Label, Icon, Card } from "../../components";
import { addFavorite } from "../../utils";
import hotelImages from "../../assets/img/hotels";
import restaurantImages from "../../assets/img/restaurants";
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
                    images={
                      restaurantImages[restaurant.LocalImages.folderName].images
                    }
                    addFavorite={() =>
                      addFavorite(this.context, "restaurants", key, restaurant)
                    }
                  />
                );
              })}
            </View>
          )}
          {/* {!isEmpty(travels) && (
            <View>
              <Label icon={<Icon name="hotels" size={27} />} title={"Hotels"} />
            </View>
          )} */}
          {/* {!isEmpty(agencies) && (
            <View>
              <Label icon={<Icon name="hotels" size={27} />} title={"Hotels"} />
            </View>
          )} */}
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
