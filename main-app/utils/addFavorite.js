const addFavorite = (context, type, key, value) => {
  const { updateFavorites, favorites } = context;
  const newData = { ...favorites };
  newData[type][key] = value;
  updateFavorites(newData);
};
export default addFavorite;
