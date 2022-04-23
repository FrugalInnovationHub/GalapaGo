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
          {/* {this.state.restaurants.map((restaurant, index) => {
            return (
              <View key={index}>
                <Text style={styles.regularBold}>{restaurant.name}</Text>
                <Swiper style={styles.wrapper} showsButtons={true}>
                  <View style={styles.slide}>
                    <Image
                      source={Items[`${restaurant.image1s}`]}
                      style={styles.slideImage}
                    />
                  </View>
                  <View style={styles.slide}>
                    <Image
                      source={Items[`${restaurant.image2s}`]}
                      style={styles.slideImage}
                    />
                  </View>
                  <View style={styles.slide}>
                    <Image
                      source={Items[`${restaurant.image3s}`]}
                      style={styles.slideImage}
                    />
                  </View>
                  <View style={styles.slide}>
                    <Image
                      source={Items[`${restaurant.image4s}`]}
                      style={styles.slideImage}
                    />
                  </View>
                </Swiper>
                <View style={styles.numberRow}>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() =>
                      Linking.openURL("tel:${" + restaurant.phoneNo + "}")
                    }
                  >
                    <Image
                      source={require("../../../../app/assets/icons/phone.png")}
                      style={styles.infoPhone}
                    />
                    <Text style={styles.infoText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() =>
                      Linking.openURL("mailto:" + restaurant.email)
                    }
                  >
                    <Image
                      source={require("../../../../app/assets/icons/email.png")}
                      style={styles.infoEmail}
                    />
                    <Text style={styles.infoText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() => Linking.openURL("https:www.coffeelabec.com")}
                  >
                    <Image
                      source={require("../../../../app/assets/icons/www_gray.png")}
                      style={styles.infoWeb}
                    />
                    <Text style={styles.infoText}>Website</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.lastRow}>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() =>
                      OpenMap.show({
                        latitude: restaurant.latitude,
                        longitude: restaurant.longitude
                      })
                    }
                  >
                    <Image
                      source={require("../../../../app/assets/icons/location_gray.png")}
                      style={styles.infoAddress}
                    />
                    <Text style={styles.infoText}>Locate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() =>
                      this.addToFavorites(restaurant.name, {
                        Name: restaurant.name,
                        Latitude: restaurant.latitude,
                        Longitude: restaurant.longitude,
                        Mail: restaurant.email,
                        Website: "https:www.coffeelabec.com",
                        Phone: restaurant.phoneNo,
                        Image: Items[`${restaurant.image4s}`]
                      })
                    }
                  >
                    <Image
                      source={require("../../../../app/assets/icons/turtleBW.png")}
                      style={styles.infoWeb}
                    />
                    <Text style={styles.infoText}>Favorites</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })} */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SantaCruzFood;

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
  buttonText: {
    fontSize: 17 * rem,
    paddingLeft: 16
  },
  buttonContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#C0C0C0",
    paddingVertical: 10,
    paddingLeft: 34,
    paddingRight: 14
  },
  lastButtonContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: "#C0C0C0",
    paddingLeft: 34,
    paddingRight: 14
  },
  buttonLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  buttonRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  chevron: {
    width: 11 * rem,
    height: 18 * rem
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
  regular: {
    fontSize: 17 * rem,
    color: "#616161",
    padding: 30,
    lineHeight: 20 * rem
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
