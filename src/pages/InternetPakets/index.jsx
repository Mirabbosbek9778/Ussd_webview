import React from "react";
import TopBar from "../../components/TopBar";
import { internet } from "../../mock/category";
import InternetCards from "../../components/InternetPackages/InternetCards";
const index = () => {
  return (
    <div className="bg-[var(--bg-color)] h-[100%] flex flex-col  ">
      <div className="h-[89px]"></div>
      <TopBar title={"Internet paketlar"} />
      {internet.map((item, index) => (
         <InternetCards  key={index} {...item}/>
      ))}
    </div>
  )
};

export default index;
