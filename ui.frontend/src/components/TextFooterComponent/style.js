import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";

const TextFooterEditConfig = {
  emptyLabel: "Insert Text",
  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const TextFooter = () => {
  return (
    <div>
      <p>created by username - devChallenges.io</p>
    </div>
  );
};

export default MapTo("page404/components/react-text")(
  TextFooter,
  TextFooterEditConfig
);
