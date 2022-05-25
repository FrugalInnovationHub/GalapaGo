import * as FileSystem from "expo-file-system";
import { imageDir } from "../config/fileSystem";
import transportImages from "../assets/img/transport";
import agencyImages from "../assets/img/travel-agencies";
import { async } from "@firebase/util";

const isFileExist = async (url) => {
  const fileInfo = await FileSystem.getInfoAsync(url);
  return fileInfo.exists;
};

const getUndownloadImages = async (dataList, _localImages) => {
  const undownloadImages = [];
  for (const key in dataList) {
    const { Image, LocalImages } = dataList[key];
    const { images } = Image;

    if (
      !!LocalImages &&
      LocalImages.folderName &&
      _localImages[LocalImages.folderName] &&
      _localImages[LocalImages.folderName].images
    ) {
      for (const image of images) {
        const isImageInLocalApp = _localImages[
          LocalImages.folderName
        ].images.find((item) => item.id === image.id);
        if (!isImageInLocalApp) {
          const isExistOnFileSystem = await isFileExist(
            `${imageDir}${Image.url}${image.file}`
          );
          if (!isExistOnFileSystem) {
            undownloadImages.push({ url: Image.url, file: image.file });
          }
        }
      }
    }
  }

  return undownloadImages;
};

const updateImages = async (database) => {
  console.log("updateImages database ", database.Timestamp);
  const { Agencies, Hotels, Restaurants, Transports } = database;
  const { Agencies_list } = Agencies;
  const { Hotels_list } = Hotels;
  const { Restaurants_list } = Restaurants;
  const { Transports_list } = Transports;
  const undownloadImages = await getUndownloadImages(
    Agencies_list,
    agencyImages
  );
  console.log("undownloadImages", undownloadImages);

  //check agencies
  //check foods
  //check hotels
  //check transports
};

export default updateImages;
