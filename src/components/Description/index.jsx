import {
  Active,
  BtnActive,
  BtnModal,
  BtnP,
  Cancel,
  Description,
  TitleText,
} from "./style";
// import { Modal } from "antd";
import ModalButtons from "../ModalButton";
import { useState } from "react";

const SingleCard = ({ description, package_name, price }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log("price: ", price);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div>
      <TitleText>Tavsif</TitleText>
      <Description>{description}</Description>
      <ModalButtons
        shown={isModalVisible}
        close={setIsModalVisible}
        dataName={package_name}
        dataPrice={price}
      />
      <BtnActive>
        <button onClick={showModal}>Paketni faollashtirish</button>
      </BtnActive>
    </div>
  );
};

export default SingleCard;
