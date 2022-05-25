import * as FileSystem from "expo-file-system";

/**
 * Checks if gif directory exists. If not, creates it
 * @param {string} imageDir
 */
export default async function ensureDirExists(imageDir) {
  const dirInfo = await FileSystem.getInfoAsync(imageDir);
  if (!dirInfo.exists) {
    console.log("Gif directory doesn't exist, creating...");
    await FileSystem.makeDirectoryAsync(imageDir, { intermediates: true });
  }
}
