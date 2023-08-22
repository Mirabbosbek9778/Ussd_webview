import React from "react";
import Container, { Titletext } from "./style";

const Tarifs = ({
  package_name,
  internet,
  imginternet,
  imginternet2,
  imginternet3,
  price,
  minutes,
  sms,
}) => {
  return (
    <Container>
      <Titletext>
        <p>{package_name}</p>
      </Titletext>
      <div className="flex gap-[185px] pl-2">
        <div className="flex gap-4">
          <img src={imginternet} alt="" />
          <p className="text-[#5A5A5A]">Internet</p>
        </div>
        <p className="text-{16px} font-normal text-#000000 ">{internet}</p>
      </div>
      <div className="flex gap-[150px] pl-2">
        <div className="flex gap-4">
          <img src={imginternet2} alt="" />
          <p className="text-[#5A5A5A]">Daqiqalar</p>
        </div>
        <p className="text-{16px} font-normal text-[#000000]">{minutes}</p>
      </div>
      <div className="flex gap-[230px] pl-2">
        <div className="flex gap-4">
          <img src={imginternet3} alt="" />
          <p className="text-[#5A5A5A]">SMS</p>
        </div>
        <p className="text-{16px} font-normal text-[#000000]">{sms}</p>
      </div>
      <Titletext.Title className="flex gap-[110px] pl-2 text-[#333333] w-[313px] h-0 border ">
        <p className="text-[#858585]">Abonent to'lovi</p>
        <p>{price} so'm/oy</p>
      </Titletext.Title>
    </Container>
  );
};

export default Tarifs;
