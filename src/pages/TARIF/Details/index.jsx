import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { useParams } from "react-router-dom";
import { tariff } from "../../../mock/category";
import TarifCard from "../../../components/Generic/cards/TarifCard";
import Copy from "../../../components/Copy";
import SingleCard from "../../../components/SingleCard";
const Details = ({}) => {
  const [filter, setFilter] = useState([]);
  const param = useParams();

  useEffect(() => {
    let res = tariff[0].tarifs.filter(
      (item) => item.id.toString() === param.id
    );
    setFilter(res);
  }, [param.id]);
  // console.log(param);

  //   console.log(filter[0]?.minutes);

  return (
    <div>
      <TopBar title="Tarif Rejalar" />
      <div className="pt-[100px] flex flex-col">
        <TarifCard {...filter[0]} />
      </div>
      <Copy />
      <SingleCard {...filter[0]} />
    </div>
  );
};

export default Details;
