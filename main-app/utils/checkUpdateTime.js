import getParsedDataFromAsyncStorage from "./getParsedDataFromAsyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ONE_WEEK = 604800000;

const updateTime = async (time) => {
  await AsyncStorage.setItem("lastUpdateTime", JSON.stringify(time));
};

const checkUpdateTime = async () => {
  const lastUpdateTime = await getParsedDataFromAsyncStorage("lastUpdateTime");
  const curTime = new Date().getTime();

  if (lastUpdateTime === null) {
    await updateTime(curTime);
    return true;
  } else if (curTime - lastUpdateTime >= ONE_WEEK) {
    await updateTime(curTime);
    return true;
  } else {
    return false;
  }
};

export default checkUpdateTime;
