import { Description, TitleText } from "./style";
import ModalButtons from "../ModalButton";

const SingleCard = ({ description }) => {
  return (
    <div>
      <TitleText>Tavsif</TitleText>
      <Description>
        <p>{description}</p>
      </Description>
      <ModalButtons />
    </div>
  );
};
export default SingleCard;
