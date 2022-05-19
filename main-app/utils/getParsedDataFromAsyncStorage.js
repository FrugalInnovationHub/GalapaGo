import AsyncStorage from "@react-native-async-storage/async-storage";

const getParsedDataFromAsyncStorage = async (key) => {
  const data = await AsyncStorage.getItem(key);
  if (data === null) return null;
  return await JSON.parse(data);
};

export default getParsedDataFromAsyncStorage;
