import { Modal } from "antd";
import { useState } from "react";
import { Active, BtnModal, BtnP, Cancel } from "./style";

const ModalButtons = ({ package_name, price }) => {
  const [contextHolder] = Modal.useModal();
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
      <Modal
        title={
          <div className="flex flex-col items-center justify-center">
            <div>
              <BtnModal>Paketni faollashtirish</BtnModal>
            </div>
            <BtnP className="text-center">
              Siz {package_name} tarifini <p>faollashtirmoqchisiz</p>
              O’tish narxi:{price} so’m
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
          padding: "0 !important",
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

export default ModalButtons;
