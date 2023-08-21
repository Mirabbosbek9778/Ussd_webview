import React from "react";
import TopBar from "../../components/TopBar";
import { UssdCodes } from "../../mock/category";
import USSDCard from "../../components/UssdCard/USSDCard";
const USSD = () => {
  const getUSDDAndroid = (e) => {
    window?.Android?.CallUSSD(e);
  };
  const getUSDDIOS = (e) => {
    window?.webkit?.messageHandlers?.CallUSSD.postMessage(e);
  };
  return (
    <div className="bg-[var(--bg-color)]">
      <TopBar />
      <div className="w-[100%] h-[85vh] overflow-auto flex flex-col px-4">
        {UssdCodes.map((item) => (
          <USSDCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default USSD;
