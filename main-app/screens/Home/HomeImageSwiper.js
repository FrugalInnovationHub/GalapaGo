import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import Galapagos_homepage_whales from "../../app/assets/images/homescreen/Galapagos_homepage_whales.png";
import Galapagos_homepage_coral from "../../app/assets/images/homescreen/Galapagos_homepage_coral.png";
import Galapagos_homepage_reptile from "../../app/assets/images/homescreen/Galapagos_homepage_reptile.png";
import Galapagos_homepage_tortoise from "../../app/assets/images/homescreen/Galapagos_homepage_tortoise.png";

const images = [
  {
    id: 1,
    source: Galapagos_homepage_whales
  },
  { id: 2, source: Galapagos_homepage_coral },
  { id: 3, source: Galapagos_homepage_reptile },
  { id: 4, source: Galapagos_homepage_tortoise }
];

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
