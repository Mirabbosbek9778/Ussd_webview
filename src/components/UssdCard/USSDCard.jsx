import React from "react";
import { BtnUssd, TextUssd, CodeUssd } from "./style";
const USSDCard = ({ title, code }) => {
  return (
    <BtnUssd >
      <TextUssd>{title} </TextUssd> <CodeUssd>{code}</CodeUssd>
    </BtnUssd>
  );
};

export default USSDCard;
