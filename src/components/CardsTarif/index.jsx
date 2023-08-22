import React from "react";
import { tariff } from "../../mock/category";
// import { Container } from "./style";
import Tarifs from "../Tarifs";

const CardsTarif = () => {
  return (
    <div className="flex flex-col">
      {tariff[0].tarifs.map((item, index) => {
        return (
          <div key={index}>
            <Tarifs {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default CardsTarif;
