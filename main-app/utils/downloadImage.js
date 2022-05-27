import * as FileSystem from "expo-file-system";
import { ensureDirExists } from "./ensureDirExists";
export const imageDir = FileSystem.documentDirectory + "images/";
const imageFileUri = (fileName) => imageDir + `${fileName}`;

/**
 * Downloads single image
 * @param {string} imageUrl
 * @param {string} fileFolderUrl
 * @param {string} fileName
 */
export const downloadSingleImage = async (
  imageUrl,
  fileFolderUrl,
  fileName
) => {
  const fileUrl = `${fileFolderUrl}${fileName}`;
  try {
    await ensureDirExists(imageFileUri(fileFolderUrl));
    await FileSystem.downloadAsync(imageUrl, imageFileUri(fileUrl));
  } catch (error) {
    console.error("Couldn't download gif file:", e);
  }
};

/**
 * Downloads all gifs specified as array of IDs
 *
 * @param {[]} images
 */
export async function downloadMultipleImages(images) {
  try {
    console.log("Downloading", images.length, "image files...");
    await Promise.all(
      images.map(({ url, file, downloadUrl }) =>
        FileSystem.downloadAsync(imageUrl(`${url}${file}`), downloadUrl)
      )
    );
  } catch (e) {
    console.error("Couldn't download gif files:", e);
  }
}
