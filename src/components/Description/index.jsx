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

const SingleCard = ({ description }) => {
  return (
    <div>
      <TitleText>Tavsif</TitleText>
      <Description>{description}</Description>
      <BtnActive>
        <button>Paketni faollashtirish</button>
      </BtnActive>
    </div>
  );
};

export default SingleCard;
