// /* eslint-disable react/prop-types */
// import React from "react";
// import { Image, Text } from "react-native";
// import { useImage } from "../hooks";

// const LocalImage = ({ fileName, alt, className, ...rest }) => {
//   const { loading, error, image } = useImage(fileName);

//   if (error) return <Text>{alt}</Text>;

//   return (
//     <>
//       {loading ? (
//         <Text>loading</Text>
//       ) : (
//         <Image source={{ uri: image }} alt={alt} {...rest} />
//       )}
//     </>
//   );
// };

// export default LocalImage;
