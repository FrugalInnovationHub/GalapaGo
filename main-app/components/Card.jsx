/* eslint-disable react/prop-types */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import OpenMap from "react-native-open-map";

const Card = ({
  name,
  phoneNo,
  email,
  website,
  position,
  images,
  addFavorite,
  isFavorite
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
      </View>
      <Swiper style={styles.body} showsButtons={false}>
        {images.map((image) => (
          <View style={styles.slide} key={`${image.title}+${name}`}>
            <Image source={image.file} style={styles.slideImage} />
          </View>
        ))}
      </Swiper>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("tel:${" + phoneNo + "}")}
        >
          <Ionicons
            name="call-outline"
            size={20}
            color="#7F7F7F"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        {!!email && email !== "n/a" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(`mailto:${email}`)}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={21}
              color="#7F7F7F"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
        )}
        {!!website && website !== "n/a" && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(website)}
          >
            <Ionicons
              name="ios-globe-outline"
              size={20}
              color="#7F7F7F"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Website</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            OpenMap.show({
              latitude: position.latitude,
              longitude: position.longitude
            })
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addFavorite && addFavorite();
          }}
        >
          <MaterialIcons
            name="favorite-outline"
            size={22}
            color={isFavorite ? "#439642" : "#7F7F7F"}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

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
    height: 220
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  slide: {},
  slideImage: {
    height: 220,
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
