import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";

const TittleEditConfig = {
  emptyLabel: "Insert Text",
  isEmpty: (props) => {
    return !props || !props.text;
  },
};

const Tittle = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default MapTo("page404/components/react-title")(
  Tittle,
  TittleEditConfig
);
