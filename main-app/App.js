import * as React from "react";
import NavigationApp from "./routers";
import GlobalStateContext from "./context/globalContext";
import DefaultDatabase from "./data/database.json";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getDatabaseSnapshot,
  getParsedDataFromAsyncStorage,
  checkUpdateTime,
  updateImages
} from "./utils";
import { getDatabase } from "firebase/database";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app from "./config/firebase";

const DATABASE = getDatabase(app);

const Favorites = {
  restaurants: {},
  hotels: {},
  travels: {},
  agencies: {}
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contextState: {
        favorites: Favorites,
        database: { ...DefaultDatabase },
        updateFavorites: (data) => this.updateFavorites(data)
      }
    };
  }

  updateFavorites(data) {
    this.setState({
      contextState: {
        updateFavorites: (_data) => this.updateFavorites(_data),
        favorites: data,
        database: this.state.contextState.database
      }
    });
  }

  async updateLocalDatabase(data) {
    await AsyncStorage.setItem("database", JSON.stringify(data));
    this.setState({
      contextState: {
        updateFavorites: (_data) => this.updateFavorites(_data),
        favorites: this.state.contextState.favorites,
        database: data
      }
    });
  }

  async initContextState(favorites, database) {
    if (!!favorites && !!database) {
      console.log("update favorites & localDatabase");
      await AsyncStorage.setItem("database", JSON.stringify(database));
      this.setState({
        contextState: {
          updateFavorites: (_data) => this.updateFavorites(_data),
          favorites: favorites,
          database: database
        }
      });
      return;
    }

    if (!!favorites) {
      console.log("update favorites ");
      this.updateFavorites(favorites);
      return;
    }

    if (!!database) {
      console.log("update localDatabase");
      await this.updateLocalDatabase(database);
      return;
    }
  }

  async init() {
    const localDatabase = await getParsedDataFromAsyncStorage("database");
    const favorites = await getParsedDataFromAsyncStorage("favorites");
    const { type, isConnected } = await NetInfo.fetch();
    const isLastUpdateOneWeekAgo = await checkUpdateTime();
    const storage = getStorage(app);

    // getDownloadURL(
    //   ref(
    //     storage,
    //     "gs://galapago-d4744.appspot.com/travel-agencies/fds-travel/1.jpg"
    //   )
    // )
    //   .then((url) => {
    //     console.log("show url", url);
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //   });

    console.log("isLastUpdateOneWeekAgo", isLastUpdateOneWeekAgo);
    console.log("isConnected", isConnected, type);
    if (type === "wifi") updateImages(localDatabase);

    if (isConnected && isLastUpdateOneWeekAgo) {
      try {
        const onlineDatabase = await getDatabaseSnapshot(DATABASE);
        console.log("online data", onlineDatabase.Timestamp);

        if (!localDatabase) {
          console.log("local database is null");
          await this.initContextState(favorites, onlineDatabase);
        } else if (!onlineDatabase) {
          console.log("online database is null");
          await this.initContextState(favorites, localDatabase);
        } else if (!!localDatabase && !!onlineDatabase) {
          console.log("local database and online database are all not null");

          const isOnlineNewThanLocal =
            parseInt(onlineDatabase.Timestamp) >
            parseInt(localDatabase.Timestamp);

          if (isOnlineNewThanLocal) {
            console.log("onlineDatabase is new than localDatabase");
            await this.initContextState(favorites, onlineDatabase);
            // if (type === "wifi") updateImages(onlineDatabase);
          } else {
            console.log("onlineDatabase is not new than localDatabase");
            await this.initContextState(favorites, localDatabase);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      await this.initContextState(favorites, localDatabase);
    }
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {}

  render() {
    return (
      <GlobalStateContext.Provider value={this.state.contextState}>
        <NavigationApp />
      </GlobalStateContext.Provider>
    );
  }
}
