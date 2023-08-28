import React from "react";
import { milliyTarifs } from "../../../mock/tarifCategory";
import TarifCard from "../../../components/Generic/cards/TarifCard";
import { useNavigate } from "react-router-dom";

const MilliyTarifs = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 my-5 mr-4">
      {milliyTarifs[0].milliyTarifss.map((item, index) => (
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

export default MilliyTarifs;
