import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Header } from "../../components";
import LearnHeader from "./LearnHeader";
//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

class Rules extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={{ backgroundColor: "white", flex: 1 }}>
            <LearnHeader
              subTitle="Rules of the National Park"
              goBack={() => {
                // eslint-disable-next-line react/prop-types
                this.props.navigation.goBack();
              }}
            />
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/1.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                To visit the National Park you must always be accompanied by a
                certified Guide of the Galapagos National Park.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/2.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Galapagos is a unique and fragile environment. Please you can
                only take pictures and video. Professional photographers need
                authorization from the National Park.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/3.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Please remain within the limits of the walking trails, for your
                safety and that of the flora and fauna.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/4.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                To avoid affecting the natural behavior of wildlife, please
                avoid being more than 2 meters from the animals.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/5.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Camping is only allowed in specific places. If you want to camp,
                you must first obtain a permit from the Galapagos National Park.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/6.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Conservation aid through cooperation with the authorities in
                their inspection, monitoring and control mission. Report of any
                anomaly to the National Park.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/7.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Do not introduce foreign organisms to the islands since they can
                have a negative impact on the ecosystem.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/8.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Please do not buy souvenirs that are made of black coral, sea
                shells, sea lion teeth, turtle shell, volcanic stone or endemic
                woods.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/9.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Galapagos animals have their own feeding behavior. Never feed
                the animals. Feeding them can be harmful to your health.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/10.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                The landscapes of Galapagos are beautiful and unique. Do not
                spoil them by writing or burning rocks or trees.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/11.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Do not litter while on the islands. Always deposit trash in a
                safe and appropriate manner.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/12.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Smoking or making fires in national park areas is prohibited and
                can cause devastating fires.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/13.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Fishing is strictly prohibited, except in those vessels
                specifically authorized by the Galapagos National Park for that
                sole purpose.
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Image
                source={require("../../app/assets/icons/14.png")}
                style={{ width: 36 * rem, height: 36 * rem }}
              />
              <Text style={styles.regular}>
                Jet Ski, submarines, water skiing and air tourism are
                prohibited.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 34,
    alignItems: "center"
  },
  regular: {
    fontSize: 17 * rem,
    color: "#616161",
    paddingLeft: 34,
    paddingRight: 65,
    lineHeight: 20 * rem
  },
  numberRow: {
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 6,
    paddingLeft: 34,
    alignItems: "stretch"
  }
});

export default Rules;
