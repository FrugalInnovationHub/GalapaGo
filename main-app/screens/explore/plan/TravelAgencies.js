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
    const propertyNames = Object.keys(agencies.agencies);
    return (
      <SafeAreaView style={styles.container}>
        <ExploreHeader
          subTitle="Travel Agencies"
          goBack={() => this.props.navigation.goBack()}
        />
        <ScrollView>
          {propertyNames.map((key) => {
            const agency = agencies.agencies[key];
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
