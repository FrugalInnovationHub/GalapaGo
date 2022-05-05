import * as React from "react";
import NavigationApp from "./routers";
import GlobalStateContext from "./context/globalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    console.log(JSON.parse(data));
    if (data) {
      this.updateFavorites(JSON.parse(data));
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
