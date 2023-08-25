import React from "react";
import { ServiceSingleCard } from "./style";
const index = ({ item: { icon, title,  }, onclick }  ) => {
  return (
    <ServiceSingleCard  onClick={onclick}>
      <p >{title}</p>
      <img src={icon} alt=""  />
    </ServiceSingleCard>
  );
};

export default index;
