import React from "react";
import { BoxItem, Navbar, TextContainer, TextItem } from "./style";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icons/arrowL.svg";

const TopBar = (props) => {
  return (
    <Navbar>
      <BoxItem>
        <div>
          <Link to={"/"}>
            <img src={arrowLeft} alt="Back" />
          </Link>
        </div>
        <TextContainer>
          <TextItem>{props.title}</TextItem>
        </TextContainer>
      </BoxItem>
    </Navbar>
  );
};

export default TopBar;
