import React from "react";

import { Header, Icon } from "../../components";
const ExploreHeader = (props) => {
  return (
    <Header
      {...props}
      title="EXPLORE"
      color="#294B95"
      icon={<Icon name={"explore_1"} size={40} color="white" />}
    />
  );
};

export default ExploreHeader;
