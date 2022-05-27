import { imageDir } from "../config/fileSystem";

const getImages = (imageInfo, localImages) => {
  const { url, images } = imageInfo;
  if (!images || typeof images !== "object") {
    return [];
  }
  const imageSource = images.map((item) => {
    const source = localImages.find((_image) => item.id === _image.id);
    if (source) {
      return source;
    } else {
      return {
        id: item.id,
        file: { uri: `${imageDir}${url}${item.file}` }
      };
    }
  });

  return imageSource;
};
export default getImages;
