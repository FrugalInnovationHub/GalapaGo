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
  MaterialIcons,
  AntDesign
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
          <View style={styles.slide} key={`${image.id}+${name}`}>
            <Image
              source={image.file}
              style={styles.slideImage}
              defaultSource={require("./../assets/img/default/Default_Image_Thumbnail.png")}
            />
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
          {isFavorite ? (
            <AntDesign
              name="heart"
              size={19}
              color="#BA2D24"
              style={[styles.buttonIcon, { paddingTop: 1 }]}
            />
          ) : (
            <MaterialIcons
              name="favorite-outline"
              size={22}
              color={"#7F7F7F"}
              style={styles.buttonIcon}
            />
          )}

          {isFavorite ? (
            <Text style={styles.buttonText}>Saved</Text>
          ) : (
            <Text style={styles.buttonText}>Save</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(Card);

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
  buttonIcon: { height: 24, alignSelf: "center" },
  buttonText: {
    color: "#000000",
    fontSize: 15
  }
});
