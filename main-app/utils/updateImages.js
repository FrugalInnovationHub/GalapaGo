import * as FileSystem from "expo-file-system";
import { imageDir } from "../config/fileSystem";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, BASE_URL_OF_STORAGE } from "../config/firebase";
import { ensureMutipleDirExists } from "../utils/ensureDirExists";
import { downloadMultipleImages } from "./downloadImage";

import hotelimages from "../assets/img/hotels";
import transportImages from "../assets/img/transport";
import agencyImages from "../assets/img/travel-agencies";
import restaurantImages from "../assets/img/restaurants";

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

/**
 *
 * @param {Array} images
 */
const getImagesWithDownloadUrl = async (images) => {
  const downloadUrls = [];

  for (const image of images) {
    try {
      const downloadUrl = await getDownloadURL(
        ref(storage, `${BASE_URL_OF_STORAGE}${image.url}${image.file}`)
      );
      if (downloadUrl) {
        downloadUrls.push({ ...image, downloadUrl });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return downloadUrls;
};

const updateImages = async (database) => {
  console.log("updateImages database ", database.Timestamp);
  const { Agencies, Hotels, Restaurants, Transports } = database;
  const { Agencies_list } = Agencies;
  const { Hotels_list } = Hotels;
  const { Restaurants_list } = Restaurants;
  const { Transports_list } = Transports;

  try {
    const undownloadAgencyImages = await getUndownloadImages(
      Agencies_list,
      agencyImages
    );
    const undownloadRestaurantImages = await getUndownloadImages(
      Restaurants_list,
      restaurantImages
    );

    const undownloadHotelImages = await getUndownloadImages(
      Hotels_list,
      hotelimages
    );

    const undownloadTransportImages = await getUndownloadImages(
      Transports_list,
      transportImages
    );

    const undownloadImages = []
      .concat(undownloadAgencyImages)
      .concat(undownloadRestaurantImages)
      .concat(undownloadHotelImages)
      .concat(undownloadTransportImages);

    console.log("undownloadImages", undownloadImages);

    if (undownloadImages.length === 0) return;

    const imagesWithDownloadUrl = await getImagesWithDownloadUrl(
      undownloadImages
    );

    console.log("imagesWithDownloadUrl", imagesWithDownloadUrl);

    await ensureMutipleDirExists(imagesWithDownloadUrl);
    await downloadMultipleImages(imagesWithDownloadUrl);
  } catch (error) {
    console.log("error", error);
  }
};

export default updateImages;
