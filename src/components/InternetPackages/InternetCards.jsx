import React from "react";
import InternetCard from "../Generic/cards/InternetCards/InternetCard";
import { CardDiv, MainBtn } from "../Generic/cards/InternetCards/style";
const InternetCards = ({ pakets,name1 }) => {
  return (
    <CardDiv>
      <h1 className="px-4 py-[20px] text-[var(--text-color)] text-[20px] font-[650]">
        {name1}
      </h1>
      {pakets.map((item, index) => (
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
