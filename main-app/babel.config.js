module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
    plugins: [["wildcard"], "react-native-reanimated/plugin"],
  };
};
