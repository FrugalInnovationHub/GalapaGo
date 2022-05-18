import * as React from "react";
import NavigationApp from "./routers";
import GlobalStateContext from "./context/globalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase, ref, onValue } from "firebase/database";
import NetInfo from "@react-native-community/netinfo";

const firebaseConfig = {
  apiKey: "AIzaSyBkGmokW285RxesrlEOEGMOpL7DjBMvk_U",
  authDomain: "galapago-d4744.firebaseapp.com",
  databaseURL: "https://galapago-d4744-default-rtdb.firebaseio.com",
  projectId: "galapago-d4744",
  storageBucket: "galapago-d4744.appspot.com",
  messagingSenderId: "508955483910",
  appId: "1:508955483910:web:e910e43a67fdbca4c64887",
  measurementId: "G-YFNZ5NMK3Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

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
        updateFavorites: (data) => this.updateFavorites(data)
      }
    };
  }

  updateFavorites(data) {
    this.setState({
      contextState: {
        updateFavorites: (_data) => this.updateFavorites(_data),
        favorites: data
      }
    });
  }

  async init() {
    const data = await AsyncStorage.getItem("favorites");
    if (data) {
      this.updateFavorites(JSON.parse(data));
    }

    const { type, isConnected } = await NetInfo.fetch();

    console.log("Connection type", type);
    console.log("Is connected?", isConnected);

    if (isConnected) {
      const starCountRef = ref(database);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        // console.log("show database", data);
        console.log("show database", data.Timestamp);
      });
    }
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <GlobalStateContext.Provider value={this.state.contextState}>
        <NavigationApp />
      </GlobalStateContext.Provider>
    );
  }
}
