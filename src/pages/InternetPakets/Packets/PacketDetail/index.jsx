import { useEffect, useState } from "react";
import TopBar from "../../../../components/TopBar";
import { useParams } from "react-router-dom";
import { tariffUzmobile } from "../../../../mock/tarifCategory";
import TarifCard from "../../../../components/Generic/cards/TarifCard";
import Copy from "../../../../components/Copy";
import { internet } from "../../../../mock/internets";
import SingleCard from "../../../../components/Description";
import ModalButtons from "../../../../components/ModalButton";
const PacketDetail = () => {
  const [filter, setFilter] = useState([]);
  const param = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  useEffect(() => {
    let res = internet[0].pakets.filter(
      (item) => item.id.toString() === param.id
    );
    setFilter(res);
  }, [param.id]);
  return (
    <>
      <div className="h-[89px]"></div>
      <TopBar title="Tarif Rejalar" />
      <div className="flex flex-col p-4 gap-4">
        <TarifCard {...filter[0]} detail />
        <Copy activate={filter[0]?.ussd_code} />
        <SingleCard {...filter[0]} />
        <ModalButtons
          shown={isModalVisible}
          close={setIsModalVisible}
          dataName={filter[0]?.package_name}
          dataPrice={filter[0]?.price}
          codE={filter[0]?.ussd_code}
        />
      </div>
    </>
  );
};

export default PacketDetail;
