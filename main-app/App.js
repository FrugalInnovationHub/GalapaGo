import * as React from "react";
import NavigationApp from "./routers";
import GlobalStateContext from "./context/globalContext";
import DefaultDatabase from "./data/database.json";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabaseSnapshot, getParsedDataFromAsyncStorage } from "./utils";
import { getDatabase } from "firebase/database";
import app from "./config/firebase";

const DATABASE = getDatabase(app);

const Favorites = {
  restaurants: {},
  hotels: {},
  travels: {},
  agencies: {}
};

const getLocalDatabase = async () => {
  const data = await getParsedDataFromAsyncStorage("database");
  return data !== null ? data : DefaultDatabase;
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
    this.setState({
      contextState: {
        updateFavorites: (_data) => this.updateFavorites(_data),
        favorites: this.state.contextState.favorites,
        database: data
      }
    });
    await AsyncStorage.setItem("database", JSON.stringify(data));
  }

  initContextState(favorites, localDatabase) {
    if (favorites && localDatabase) {
      console.log("update favorites & localDatabase");
      this.setState({
        contextState: {
          updateFavorites: (_data) => this.updateFavorites(_data),
          favorites: favorites,
          database: localDatabase
        }
      });
      return;
    }
    if (favorites) {
      console.log("update favorites ");
      this.updateFavorites(favorites);
      return;
    }
    if (localDatabase) {
      console.log("update localDatabase");
      this.updateLocalDatabase(localDatabase);
      return;
    }
  }

  async init() {
    const database = await getLocalDatabase();
    const favorites = await getParsedDataFromAsyncStorage("favorites");
    const { type, isConnected } = await NetInfo.fetch();

    if (isConnected) {
      try {
        const onlineDatabase = await getDatabaseSnapshot(DATABASE);
        console.log("online data", onlineDatabase.Timestamp);
        if (parseInt(onlineDatabase.Timestamp) > parseInt(database.Timestamp)) {
          console.log("update LocalDatabase");
          this.updateLocalDatabase(onlineDatabase);
        } else {
          console.log("not update");
        }
      } catch (error) {
        console.log(error);
      }
    }

    this.initContextState(favorites, database);
  }

  componentDidMount() {
    this.init();
  }

  // componentDidUpdate() {
  //   console.log(
  //     "show default database",
  //     this.state.contextState.database.Timestamp
  //   );
  // }

  render() {
    return (
      <GlobalStateContext.Provider value={this.state.contextState}>
        <NavigationApp />
      </GlobalStateContext.Provider>
    );
  }
}
