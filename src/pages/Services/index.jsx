import React from "react";
import { Services } from "../../mock/category";
import ServiceCard from "../../components/ServiceCard";
import TopBar from "../../components/TopBar/index";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <div className="px-4">
      <TopBar title={"Xizmatlar"} />
      <div className="py-[90px]">
        {" "}
        {Services.map((item, index) => (
          <Link to={`/services/service/${item.id}`} key={index}>
            {" "}
            <ServiceCard key={index} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
