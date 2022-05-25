import * as FileSystem from "expo-file-system";

const gifDir = FileSystem.documentDirectory + "images/";
const gifFileUri = (gifId) => gifDir + `gif_${gifId}_200.gif`;
const imageUrl = (gifId) => `https://media1.giphy.com/media/${gifId}/200.gif`;

/**
 * Checks if gif directory exists. If not, creates it
 */
async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(gifDir);
  if (!dirInfo.exists) {
    console.log("Gif directory doesn't exist, creating...");
    await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
  }
}

/**
 * Downloads all gifs specified as array of IDs
 * @param {string[]} gifIds
 */
export async function addMultipleGifs(gifIds) {
  try {
    await ensureDirExists();
    console.log("Downloading", gifIds.length, "gif files...");
    await Promise.all(
      gifIds.map((id) => FileSystem.downloadAsync(imageUrl(id), gifFileUri(id)))
    );
  } catch (e) {
    console.error("Couldn't download gif files:", e);
  }
}

/**
 *
 *  Returns URI to our local gif file
 *  If our gif doesn't exist locally, it downloads it
 * @param {string} gifId
 * @returns {string}
 */
export async function getSingleGif(gifId) {
  await ensureDirExists();

  const fileUri = gifFileUri(gifId);
  const fileInfo = await FileSystem.getInfoAsync(fileUri);

  if (!fileInfo.exists) {
    console.log("Gif isn't cached locally. Downloading...");
    await FileSystem.downloadAsync(imageUrl(gifId), fileUri);
  }

  return fileUri;
}

/**
 *
 * Exports shareable URI - it can be shared outside your app
 * @param {string} gifId
 * @returns
 */
export async function getImageContentUri(gifId) {
  return FileSystem.getContentUriAsync(await getSingleGif(gifId));
}

// Deletes whole giphy directory with all its content
export async function deleteAllGifs() {
  console.log("Deleting all GIF files...");
  await FileSystem.deleteAsync(gifDir);
}

/**
 *
 * @param {string} imgId
 * @param {string} imageUrl
 * @returns {string}
 */
export async function getSingleImage(imgId, imageUrl) {
  await ensureDirExists();
  const fileUri = gifFileUri(imgId);
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  if (fileInfo.exists) {
    console.log("Image is in cache locally");
  }
  if (!fileInfo.exists) {
    console.log("Image isn't cached locally. Downloading...");
    //"https://i.imgur.com/TkIrScD.png"
    await FileSystem.downloadAsync(imageUrl, fileUri);
    console.log("download successful", fileUri);
  }
  return fileUri;
}
