import { BtnActive, Description, TitleText } from './style';
import ModalButtons from '../ModalButton';
import { useState } from 'react';

const SingleCard = ({ description, package_name, price }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
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
    </>
  );
};

export default SingleCard;
