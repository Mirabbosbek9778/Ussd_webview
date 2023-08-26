import React, { useState } from "react";
import {
  Active,
  BtnActive,
  BtnModal,
  BtnP,
  Cancel,
  Description,
  TitleText,
} from "./style";
import { Modal } from "antd";

const SingleCard = ({ description }) => {
  const [modal, contextHolder] = Modal.useModal();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <TitleText className="">Tavsif</TitleText>
      <Description>
        <p>{description}</p>
      </Description>
      <BtnActive>
        <button className="text-withe" onClick={showModal}>
          Paketni faollashtirish
          {contextHolder}
        </button>
      </BtnActive>

      <Modal
        title={
          <div className="flex flex-col items-center justify-center">
            <div>
              <BtnModal className="">Paketni faollashtirish</BtnModal>
            </div>
            <BtnP className="text-center">
              Siz “Barakali 22” tarifini <p>faollashtirmoqchisiz</p>
              O’tish narxi: 22 000 so’m
            </BtnP>
          </div>
        }
        open={isModalVisible}
        footer={null}
        closable={false}
        style={{
          position: "absolute",
          top: "40%",
          left: "0",
          bottom: "0",
          right: "0",
          padding: "0 !important", // Set padding to 0
        }}
        maskStyle={{ background: "rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex w-full mx-auto border rounded-lg justify-evenly h-11">
          <Cancel onClick={handleCancel}>Bekor qilish</Cancel>
          <div className="border"></div>
          <Active onClick={handleOk}>Faollashtirish</Active>
        </div>
      </Modal>
    </div>
  );
};
export default SingleCard;
