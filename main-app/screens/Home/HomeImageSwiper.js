import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import images from "../../assets/img/homescreen";

const HomeImageSwiper = () => {
  return (
    <Swiper>
      {images.map((item) => (
        <Image key={item.id} source={item.source} style={styles.image} />
      ))}
    </Swiper>
  );
};

export default HomeImageSwiper;

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" }
});
