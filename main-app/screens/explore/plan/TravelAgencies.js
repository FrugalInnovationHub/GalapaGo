import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ExploreHeader from "../ExploreHeader";
import { Card } from "../../../components";
import agenciesImages from "../../../assets/img/travel-agencies";
import agencies from "../../../data/agencies.json";
import globalStateContext from "../../../context/globalContext";
import { addFavorite } from "../../../utils";
class TravelAgencies extends React.Component {
  static contextType = globalStateContext;

  render() {
    const { favorites = undefined, database } = this.context;
    const { Agencies } = database;
    const { Agencies_list } = Agencies;
    const propertyNames = Object.keys(Agencies_list);

    return (
      <SafeAreaView style={styles.container}>
        <ExploreHeader
          subTitle="Travel Agencies"
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView>
          {propertyNames.map((key) => {
            const agency = Agencies_list[key];
            const isFavorite = !!favorites.agencies[key];
            return (
              <Card
                key={key}
                name={agency.Name}
                phoneNo={agency.PhoneNo}
                position={{
                  latitude: agency.Latitude,
                  longitude: agency.Longitude
                }}
                website={agency.Website}
                email={agency.Email}
                images={agenciesImages[agency.LocalImages.folderName].images}
                addFavorite={() =>
                  addFavorite(this.context, "agencies", key, agency)
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

export default TravelAgencies;

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 }
});
