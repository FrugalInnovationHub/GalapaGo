import * as React from "react";
import { StyleSheet, Dimensions, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "../../../../components";
import ExploreHeader from "../../ExploreHeader";
import restaurantImages from "../../../../assets/img/restaurants";
import restaurants from "../../../../data/restaurants.json";
class SantaCruzFood extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants: []
    };
  }

  componentDidMount() {
    this.setState({ restaurants: restaurants });
  }

  async addToFavorites(name, info) {
    let value = await AsyncStorage.getItem("Food");
    let new_value;
    if (value !== null) {
      new_value = JSON.parse(value);
      new_value[name] = info;
    } else {
      new_value = {};
      new_value[name] = info;
    }
    console.log(new_value);
    await AsyncStorage.setItem("Food", JSON.stringify(new_value));
  }

  render() {
    const propertyNames = Object.keys(restaurants.restaurants);
    return (
      <SafeAreaView style={styles.container}>
        <ExploreHeader
          subTitle="Food & Drinks"
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
          {propertyNames.map((key) => {
            const restaurant = restaurants.restaurants[key];
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
