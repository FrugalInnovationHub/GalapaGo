import * as React from "react";
import { StyleSheet, Dimensions, SafeAreaView, ScrollView } from "react-native";
import ExploreHeader from "../ExploreHeader";
import { Card } from "../../../components";
import transportImages from "../../../assets/img/transport";
import globalStateContext from "../../../context/globalContext";
import { addFavorite, getImages } from "../../../utils";
class IslandHop extends React.Component {
  static contextType = globalStateContext;

  render() {
    const { favorites = undefined, database } = this.context;
    const { Transports } = database;
    const { Transports_list } = Transports;

    const propertyNames = Object.keys(Transports_list);
    return (
      <SafeAreaView style={styles.container}>
        <ExploreHeader
          subTitle="Island Hop"
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView style={styles.scrollView}>
          {propertyNames.map((key) => {
            const transport = Transports_list[key];
            const isFavorite = !!favorites.travels[key];
            const localImages =
              transportImages[transport.LocalImages.folderName].images;

            const { Image } = transport;
            const imageSouce = getImages(Image, localImages);
            return (
              <Card
                key={key}
                name={transport.Name}
                phoneNo={transport.PhoneNo}
                position={{
                  latitude: transport.Latitude,
                  longitude: transport.Longitude
                }}
                website={transport.Website}
                email={transport.Email}
                images={imageSouce}
                addFavorite={() =>
                  addFavorite(this.context, "travels", key, transport)
                }
                isFavorite={isFavorite}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default IslandHop;

//get scaling factors
const entireScreenWidth = Dimensions.get("window").width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});
