import React from "react";
import { Header, Icon } from "../../components";

const FavoritesHeader = (props) => {
  return (
    <Header
      {...props}
      title="SAVED"
      color="#BA2D24"
      icon={<Icon name={"favorites"} size={32} color="white" />}
    />
  );
};

export default FavoritesHeader;
