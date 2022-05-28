import * as FileSystem from "expo-file-system";
import { imageDir } from "../config/fileSystem";
/**
 * Checks if gif directory exists. If not, creates it
 * @param {string} imageDir
 */
export const ensureDirExists = async (imageDir) => {
  const dirInfo = await FileSystem.getInfoAsync(imageDir);
  if (!dirInfo.exists) {
    console.log("Gif directory doesn't exist, creating...");
    await FileSystem.makeDirectoryAsync(imageDir, { intermediates: true });
  }
};

export const ensureMutipleDirExists = async (images) => {
  for (const image of images) {
    const { url, file } = image;
    await ensureDirExists(`${imageDir}${url}`);
  }
};
