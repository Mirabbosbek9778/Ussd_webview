import { Modal } from "antd";
import { Active, BtnModal, BtnP, Cancel } from "./style";
import { callUssd } from "../../utils";
const ModalButtons = (props) => {
  const handleOk = () => {
    props?.close(false);
    console.log(props);
  };

  const handleCancel = () => {
    props?.close(false);
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
              Siz {props?.dataName} tarifini <p>faollashtirmoqchisiz</p>
              O’tish narxi:{props?.dataPrice} so’m
            </BtnP>
          </div>
        }
        open={props?.shown}
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
