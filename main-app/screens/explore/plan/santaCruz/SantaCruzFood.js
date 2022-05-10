import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Card } from "../../../../components";
import ExploreHeader from "../../ExploreHeader";
import restaurantImages from "../../../../assets/img/restaurants";
import restaurants from "../../../../data/Restaurants.json";
import globalStateContext from "../../../../context/globalContext";
import { addFavorite } from "../../../../utils";
class SantaCruzFood extends React.Component {
  static contextType = globalStateContext;

  constructor() {
    super();
  }

  render() {
    const propertyNames = Object.keys(restaurants.restaurants);
    const { favorites = undefined } = this.context;
    return (
      <SafeAreaView style={styles.container}>
        <ExploreHeader
          subTitle="Food & Drinks"
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
          {propertyNames.map((key) => {
            const restaurant = restaurants.restaurants[key];
            const isFavorite = !!favorites.restaurants[key];
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
                isFavorite={isFavorite}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzFood;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});
