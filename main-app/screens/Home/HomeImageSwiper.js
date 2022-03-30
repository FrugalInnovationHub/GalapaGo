import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import Galapagos_homepage_whales from "../../app/assets/images/homescreen/Galapagos_homepage_whales.jpg";

const images = [
  {
    id: 1,
    source: Galapagos_homepage_whales
  },
  { id: 2, source: Galapagos_homepage_whales },
  { id: 3, source: Galapagos_homepage_whales }
];

const HomeImageSwiper = () => {
  return (
    <Swiper>
      {images.map((item) => (
        <Image
          key={item.id}
          source={Galapagos_homepage_whales}
          style={styles.image}
        />
      ))}
    </Swiper>
  );
};

export default HomeImageSwiper;

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" }
});
