import * as FileSystem from "expo-file-system";

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

export const ensureMutipleDirExists = async (imageDirs) => {
  for (const imageDir of imageDirs) {
    const { url } = imageDir;
    await ensureDirExists(url);
  }
};
