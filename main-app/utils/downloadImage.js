import * as FileSystem from "expo-file-system";
import ensureDirExists from "./ensureDirExists";
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
 * @param {string[]} gifIds
 */
// export async function downloadMultipleImages(imageUrl, fileFolderUrl, fileNames) {
//   try {
//     await ensureDirExists(imageFileUri(fileFolderUrl));
//     console.log("Downloading", gifIds.length, "gif files...");
//     await Promise.all(
//       gifIds.map((id) => FileSystem.downloadAsync(imageUrl(id), gifFileUri(id)))
//     );
//   } catch (e) {
//     console.error("Couldn't download gif files:", e);
//   }
// }
