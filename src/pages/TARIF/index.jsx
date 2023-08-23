import TopBar from "../../components/TopBar";
import { tariff } from "../../mock/category";
import TarifCard from "../../components/Generic/cards/TarifCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Tarif = () => {
  // const { category_id } = useParams();
  return (
    <div className="flex flex-col pt-[100px] gap-4 pb-[31px]">
      <TopBar title="Tarif rejalar" />
      {tariff[0].tarifs.map((item, index) => (
        <Link to={`/tarif/detailed/${item.id}`} className="flex flex-col">
          <TarifCard key={index} {...item} />
        </Link>
      ))}
    </div>
  );
};

export default Tarif;
