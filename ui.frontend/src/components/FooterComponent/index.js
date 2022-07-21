import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { Paragraph } from "./style";

const Footer = (props) => {
  return (
    <Paragraph>
      <p>
        created by <span>{props.text}</span> - devChallenges.io
      </p>
    </Paragraph>
  );
};

export default MapTo("page404/components/react-footer")(Footer);
