import React from "react";
import InternetCard from "./InternetCard";
import { CardDiv, MainBtn } from "./style";
const InternetCards = (props) => {
  return (
    <CardDiv>
      <h1 className="px-4 py-[12px] text-[var(--text-color)] text-[20px] font-[650]">
        {props.type}
      </h1>
      {props.data.map((item, index) => (
        <InternetCard key={index} {...item} />
      ))}
      <div className="py-4 mb-4">
        {" "}
        <MainBtn>Barchasini Ko'rish</MainBtn>
      </div>
    </CardDiv>
  );
};

export default InternetCards;
