import React from "react";

import { Header, Icon } from "../../components";

const LearnHeader = (props) => {
  return (
    <Header
      {...props}
      title="LEARN"
      color="#FFB800"
      icon={<Icon name={"learn"} size={40} color="white" />}
    />
  );
};

export default LearnHeader;
