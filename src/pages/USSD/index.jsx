import React from "react";
import TopBar from "../../components/TopBar";
import USSDList from "./Ussd";
const USSD = () => {
  return (
    <div>
      <TopBar title="USSD Kodlar" />
      <USSDList />
    </div>
  );
};

export default USSD;
