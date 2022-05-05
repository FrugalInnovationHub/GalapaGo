import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Header, Icon } from "../../components";
const ExploreHeader = (props) => {
  return (
    <Header
      {...props}
      title="EXPLORE"
      color="#294B95"
      icon={<Icon name={"explore"} size={35} color="white" />}
    />
  );
};

export default ExploreHeader;
