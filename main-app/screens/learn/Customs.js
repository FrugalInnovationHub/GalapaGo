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
import LearnHeader from "./LearnHeader";

class Customs extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={{ backgroundColor: "white", flex: 1 }}>
            <LearnHeader
              subTitle="Social Customs"
              goBack={() => {
                // eslint-disable-next-line react/prop-types
                this.props.navigation.goBack();
              }}
            />
            <Text style={styles.regular}>
              Ecuadorians are known to be very hospitable, friendly and helpful.
              {"\n\n"}
              Ecuadorians are known for their ‘South American laid-backness’.
              Please be patient and include some waiting time in your travel
              itinerary. When invited to someone's home,bring small gifts and
              try not to say negative comments.{"\n\n"}
              Photographing airports, military equipment, and the police is
              strictly prohibited. Ask for someon'e permission before taking a
              photo of them. {"\n\n"}
              There are marked smoking areas. Those smoking outside of these
              areas may be penalized.{"\n\n"}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Customs;

//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  regular: {
    fontSize: 17 * rem,
    color: "#616161",
    paddingLeft: 34,
    paddingTop: 30,
    paddingRight: 34,
    lineHeight: 20 * rem
  }
});
