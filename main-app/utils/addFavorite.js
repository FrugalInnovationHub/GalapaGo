import AsyncStorage from "@react-native-async-storage/async-storage";

const addFavorite = async (context, type, key, value) => {
  const { updateFavorites, favorites } = context;
  const newData = { ...favorites };

  if (newData[type][key]) {
    delete newData[type][key];
  } else {
    newData[type][key] = value;
  }

  try {
    await AsyncStorage.setItem("favorites", JSON.stringify(newData));

    updateFavorites(newData);
  } catch (error) {
    console.log(error);
  }
};
export default addFavorite;
