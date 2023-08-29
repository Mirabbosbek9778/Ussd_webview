import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { useParams } from "react-router-dom";
import TarifCard from "../../../components/Generic/cards/TarifCard";
import Copy from "../../../components/Copy";
import SingleCard from "../../../components/Description";
import { tariff, unitsTariff } from "../../../mock/tarifCategory";

const Details = () => {
  const [filter, setFilter] = useState([]);
  const [units, setUnits] = useState([]);

  const param = useParams();

  useEffect(() => {
    let res = tariff[0].tarifs.filter(
      (item) => item.id.toString() === param.id
    );

    let units = unitsTariff[0].tarifUnits.filter(
      (item) => item.id.toString() === param.id
    );

    setUnits(units);

    setFilter(res);
  }, [param.id]);
  console.log(units);

  return (
    <>
      <div className="h-[89px]"></div>
      <TopBar title="Tarif Rejalar" />
      <div className="flex flex-col gap-4 p-4">
        <TarifCard {...filter[0]} detail />
        <Copy />
        <SingleCard {...filter[0]} />
      </div>
    </>
  );
};

export default Details;
