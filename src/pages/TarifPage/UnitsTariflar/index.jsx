import React from "react";
import { unitsTariff } from "../../../mock/tarifCategory";
import TarifCard from "../../../components/Generic/cards/TarifCard";
import { useNavigate } from "react-router-dom";

const UnitsTarifs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 my-5 mr-4">
      {unitsTariff[0].tarifUnits.map((item, index) => (
        <TarifCard
          key={index}
          onclick={() => {
            navigate(`/tarif/detailed/${item.id}`);
          }}
          {...item}
        />
      ))}
    </div>
  );
};

export default UnitsTarifs;
