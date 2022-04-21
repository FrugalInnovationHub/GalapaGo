/* eslint-disable react/prop-types */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import Swiper from "react-native-swiper";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import OpenMap from "react-native-open-map";

const Card = ({
  Name,
  PhoneNo,
  Email,
  // Image,
  Website,
  Latitude,
  Longitude
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{Name}</Text>
      </View>
      <Swiper style={styles.body} showsButtons={true}>
        <View style={styles.slide}>
          <Image
            source={require("../app/assets/images/travel-agencies/fds-travel/1.jpg")}
            style={styles.slideImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../app/assets/images/travel-agencies/fds-travel/2.jpg")}
            style={styles.slideImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../app/assets/images/travel-agencies/fds-travel/3.jpg")}
            style={styles.slideImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../app/assets/images/travel-agencies/fds-travel/4.jpg")}
            style={styles.slideImage}
          />
        </View>
      </Swiper>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("tel:${" + PhoneNo + "}")}
        >
          <Ionicons
            name="call-outline"
            size={20}
            color="#7F7F7F"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(`mailto:${Email}`)}
        >
          <MaterialCommunityIcons
            name="email-outline"
            size={21}
            color="#7F7F7F"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(Website)}
        >
          <Ionicons
            name="ios-globe-outline"
            size={20}
            color="#7F7F7F"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Website</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            OpenMap.show({ latitude: Latitude, longitude: Longitude })
          }
        >
          <Ionicons
            name="location-outline"
            size={21}
            color="#7F7F7F"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Locate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons
            name="favorite-outline"
            size={22}
            color="#7F7F7F"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: { borderBottomColor: "#e5e5e5e5", borderBottomWidth: 10 },
  header: { height: 60, justifyContent: "center" },
  headerText: {
    color: "#676767",
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "700"
  },
  body: {
    height: 200
  },
  footer: {
    // height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  slide: {},
  slideImage: {
    height: 200,
    width: "100%"
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    width: 58,
    marginVertical: 15
  },
  buttonIcon: { height: 24 },
  buttonText: {
    color: "#000000",
    fontSize: 15
  }
});
