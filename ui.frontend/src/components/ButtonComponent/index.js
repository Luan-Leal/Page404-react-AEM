import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { divButton } from "./style";

const ButtonEditConfig = {
  emptyLabel: "Button text",
  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const Button = (props) => {
  return (
    <divButton>
      <button>{props.text}</button>
    </divButton>
  );
};

export default MapTo("page404/components/react-button")(
  Button,
  ButtonEditConfig
);
