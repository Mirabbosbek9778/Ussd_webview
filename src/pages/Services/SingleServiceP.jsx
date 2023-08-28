import React from "react";
import { useParams } from "react-router-dom";
import { Services } from "../../mock/ServiceCodes";
import { serviceicon } from "../../assets";
import TopBar from "../../components/TopBar";
import SingleCard from "../../components/Description";
import Copy from "../../components/Copy";
const SingleServiceP = () => {
  const { id } = useParams();
  const selectedElem = Services.filter((item) => item.id.toString() === id);
  //   console.log(selectedElem);
  return (
    <div>
      <TopBar title={selectedElem[0].title} />
      <SingleCard />
      <Copy />
      <button>Xizmatni faollashtirish</button>
      <button>Xizmatni o’chirish</button>
    </div>
  );
};

export default SingleServiceP;
{
  /* <div className="py-[89px] px-4">
        {" "}
        <div className="bg-[var(--background-color)]">
          {" "}
          <h1 className="text-[var(--ussd-color)]">{selectedElem[0].title}</h1>
          <p className="text-[var(--arrow-icon-color)]">
            {selectedElem[0].description}
          </p>
          <div>
            <img src={serviceicon} alt="" />
            <p>Xizmat narxi</p>{" "}
            <p className="bg-[var(--ussd-color)]">
              {selectedElem[0].price} so'm/kun
            </p>
          </div>
        </div>
        <div>
          <p>Xizmatni faollashtirish</p>
          <p className="text-[var(--ussd-color)]">
            {selectedElem[0].activate}
          </p>{" "}
        </div>
        <div>
          <p>Xizmatni o’chirish</p>
          <p className="text-[var(--ussd-color)]">
            {selectedElem[0].unactivate}
          </p>{" "}
        </div>
      </div>
      <p>Tavsif</p>
      <p className="text-[var(--arrow-icon-color)]">{selectedElem[0].text}</p> */
}
