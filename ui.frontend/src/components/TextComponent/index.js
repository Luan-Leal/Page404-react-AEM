import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { Paragraph } from "./style";

const TextEditConfig = {
  emptyLabel: "Insert Text",
  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const Text = (props) => {
  return (
    <Paragraph>
      <p>{props.text}</p>
    </Paragraph>
  );
};

export default MapTo("page404/components/react-text")(Text, TextEditConfig);
