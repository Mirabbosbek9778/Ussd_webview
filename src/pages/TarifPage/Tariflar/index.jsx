import { tariff } from '../../../mock/category';
import TarifCard from '../../../components/Generic/cards/TarifCard';
import { useNavigate } from 'react-router-dom';

const Tarifs = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-4 my-5 mr-4'>
      {tariff[0].tarifs.map((item, index) => (
        <TarifCard
          key={index}
          onclick={() => {
            navigate(`/tarif/detailed/${item.id}`);
          }}
          {...item}
        />
      ))}
    </div>
  );
};

export default Tarifs;
