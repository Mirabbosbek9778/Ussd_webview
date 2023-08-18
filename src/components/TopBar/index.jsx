import React from "react";
import { Navbar } from "./style";
import arrowLeft from "../../assets/icons/arrowL.svg";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar>
      <div className="flex items-center pt-[50px]">
        <div className="">
          <Link to={"/"}>
            <img src={arrowLeft} alt="" />
          </Link>
        </div>
        <div className="flex justify-center flex-1 pr-[20px]">
          <p className="text-white">USSD kodlar</p>
        </div>
      </div>
    </Navbar>
  );
};

export default TopBar;
