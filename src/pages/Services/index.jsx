import React from "react";
import { Services } from "../../mock/category";
import ServiceCard from "../../components/ServiceCard";
import TopBar from "../../components/TopBar/index";
const index = () => {
  return (
    <div className="px-4">
      <TopBar title={"Xizmatlar"} />
      <div className="py-[90px]">
        {" "}
        {Services.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default index;
