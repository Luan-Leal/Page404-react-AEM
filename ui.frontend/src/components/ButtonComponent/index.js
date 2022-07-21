import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { ButtonDiv } from "./style";

const ButtonEditConfig = {
  emptyLabel: "Button text",
  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const Button = (props) => {
  return (
    <ButtonDiv>
      <button>{props.text}</button>
    </ButtonDiv>
  );
};

export default MapTo("page404/components/react-button")(
  Button,
  ButtonEditConfig
);
