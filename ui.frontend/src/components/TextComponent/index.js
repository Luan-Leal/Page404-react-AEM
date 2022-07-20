import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";

const TextEditConfig = {
  emptyLabel: "Insert Text",
  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const Text = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default MapTo("page404/components/react-text")(Text, TextEditConfig);
