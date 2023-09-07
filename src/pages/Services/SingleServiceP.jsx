import React from "react";
import { useParams } from "react-router-dom";
import { Services } from "../../mock/ServiceCodes";
import { serviceicon } from "../../assets";
import TopBar from "../../components/TopBar";
import Copy from "../../components/Copy";
import Description from "../../components/Description";
import { BtnActive2 } from "./style";
const SingleServiceP = () => {
  const { id } = useParams();
  const selectedElem = Services.filter((item) => item.id.toString() === id);
  return (
    <div>
      <TopBar title={selectedElem[0].title} />
      <div className="pt-[89px] pb-[34px] px-4">
        {" "}
        <div className="bg-[var(--background-color)] px-2 my-4  py-[14px] rounded-xl">
          {" "}
          <h1 className="text-[var(--ussd-color)] pb-[10px] text-[20px] font-[500]">
            {selectedElem[0].title}
          </h1>
          <p className="text-[var(--arrow-icon-color)] ">
            {selectedElem[0].text}
          </p>
          <div className="flex items-center pt-[18px] ">
            <img
              src={serviceicon}
              alt=""
              className="bg-[var(--border-color)] p-1 rounded-lg"
            />
            <p className="pl-2 text-[var(--icon-color)] ">Xizmat narxi</p>{" "}
            <p className="bg-[var(--ussd-color)] ml-[120px] rounded-xl p-1  text-[14px] text-[var(--card-color)] text-center">
              {selectedElem[0].price}
            </p>
          </div>
        </div>
        <Copy activate={selectedElem[0].activate} isFull={true} />
        <div className="mt-2">
          {" "}
          <Copy activate={selectedElem[0].unactivate} isFull={false} />
        </div>
      </div>
      <div className="px-4">
        {" "}
        <Description {...selectedElem[0]} />
      </div>
      <div className=" px-4" >
        {" "}
        <BtnActive2>
          <button className="text-[var(--ussd-color)]">
            Paketni o'chirish
          </button>
        </BtnActive2>
      </div>
    </div>
  );
};

export default SingleServiceP;
{
  /*  */
}
