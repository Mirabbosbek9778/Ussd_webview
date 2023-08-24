import React from "react";
import { BtnActive, Description, TitleText } from "./style";

const SingleCard = ({ description }) => {
  return (
    <div>
      <TitleText className="">Tavsif</TitleText>
      <Description>
        <p>{description}</p>
      </Description>
      <BtnActive>
        <button>Paketni faollashtirish</button>
      </BtnActive>
    </div>
  );
};

export default SingleCard;
