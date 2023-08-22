import React from "react";
import { InternetDiv } from "./style";
const InternetCard = ({ package_name, price, deadline }) => {
  return (
    <InternetDiv>
      <p className="px-4 py-[8px] text-[var(--ussd-color)] text-xl font-[550] ">
        {package_name}
      </p>
      <div className="px-4 flex justify-between w-[100%]">
        <p className="text-[12px] my-[12px] text-[var(--arrow-icon-color)]">
          To'plam narxi
        </p>
        <p className="text-[var(--text-color)] text-[14px] font-[500]">
          {price}
        </p>
      </div>
      <div className="px-4 flex justify-between w-[100%]">
        <p className="text-[12px] my-[6px] text-[var(--arrow-icon-color)] ">
          Amal qilish muddati
        </p>
        <p className="font-[500] text-[14px]">{deadline}</p>
      </div>
    </InternetDiv>
  );
};

export default InternetCard;
