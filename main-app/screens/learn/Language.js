import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  SectionList
} from "react-native";
import { Header } from "../../components";
import LearnHeader from "./LearnHeader";
//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

class Language extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal={false}>
          <LearnHeader
            subTitle="Useful Phrases for Ecuador"
            goBack={() => {
              // eslint-disable-next-line react/prop-types
              this.props.navigation.goBack();
            }}
          />
          <View style={{ backgroundColor: "white", flex: 1 }}>
            <Text style={styles.regular}>
              Check out the top phrases in Spanish for travelers heading to the
              Galapagos Islands:
            </Text>
            <SectionList
              style={styles.lists}
              sections={[
                {
                  title: "Greetings",
                  data: [
                    "Good morning - Buenos días",
                    "Good afternoon - Buenos tardes",
                    "Hi, Hello - Hola",
                    "How are you? - Cómo está?",
                    "Good, thank you - Bien, gracias",
                    "Nice to meet you - Mucho gusto"
                  ]
                },
                {
                  title: "Basic Phrases",
                  data: [
                    "Do you speak English? - Habla inglés?",
                    "Please - Por favor",
                    "Thank you - Gracias",
                    "I want - Yo quiero",
                    "I do not want - Yo no quiero",
                    "A ticket - Un boleto",
                    "A hotel - Un hotel",
                    "A taxi - Un taxi",
                    "I would like - Me gustaría",
                    "I understand - Yo entiendo",
                    "I do not understand - Yo no entiendo",
                    "How much does it cost? - Cuanto cuesta?"
                  ]
                },
                {
                  title: "Directions",
                  data: [
                    "Where is...? - Dónde está?",
                    "Where is the bus station/train station? - Dónde está la estación de autobuses/ferrocarril?",
                    "Where is a good restaurant? - Dónde hay un buen restaurante?",
                    "Where is the bathroom? - Dónde está el baño?"
                  ]
                },
                {
                  title: "Understanding Directions",
                  data: [
                    "To the right - A la derecha",
                    "To the left - A la izquierda",
                    "Straught ahead - Derecho",
                    "At the corner - En la esquina",
                    "In two, three, four blocks - A dos, tres, cuatro curadras"
                  ]
                }
              ]}
              renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              keyExtractor={(item, index) => index}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Language;

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
  },
  sectionHeader: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 17 * rem,
    flexWrap: "wrap",
    paddingTop: 5,
    paddingLeft: 14,
    paddingRight: 10,
    paddingBottom: 5,
    marginBottom: 5,
    marginTop: 30,
    backgroundColor: "rgba(247,247,247,1.0)",
    flexDirection: "row"
  },
  item: {
    fontSize: 17 * rem,
    height: 44,
    paddingTop: 15,
    paddingLeft: 14,
    paddingRight: 34,
    flexWrap: "wrap",
    flex: 1
  },
  lists: {
    marginBottom: 30,
    marginRight: 10,
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row"
  }
});
