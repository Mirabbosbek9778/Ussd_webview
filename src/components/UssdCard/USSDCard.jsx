import React from "react";
import { BtnUssd, TextUssd, CodeUssd } from "./style";
const USSDCard = ({ title, code, onclick }) => {
  return (
    <BtnUssd onClick={() => onclick(code)}>
      <TextUssd>{title} </TextUssd> <CodeUssd>{code}</CodeUssd>
    </BtnUssd>
  );
};

export default USSDCard;
