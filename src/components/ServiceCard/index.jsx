import React from "react";
import { ServiceSingleCard } from "./style";
const index = ({ item: { icon, title } }) => {
  return (
    <ServiceSingleCard >
      <p >{title}</p>
      <img src={icon} alt=""  />
    </ServiceSingleCard>
  );
};

export default index;
