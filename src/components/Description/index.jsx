import { BtnActive, Description, TitleText } from './style';
import ModalButtons from '../ModalButton';
import { useState } from 'react';

const SingleCard = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <TitleText>Tavsif</TitleText>
      <Description>{props?.description}</Description>
      <ModalButtons
        shown={isModalVisible}
        close={setIsModalVisible}
        data={props}
      />
      <BtnActive>
        <button onClick={showModal}>Paketni faollashtirish</button>
      </BtnActive>
    </>
  );
};

export default SingleCard;
