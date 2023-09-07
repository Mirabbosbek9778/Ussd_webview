import TarifCard from '../../../components/Generic/cards/TarifCard';
import { useNavigate } from 'react-router-dom';
import { tariffUzmobile } from '../../../mock/tarifCategory';
import { useCompany } from '../../../context/Company';

const Tarifs = ({ data }) => {
  const [, dispatch] = useCompany();
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-4 my-5 mr-4'>
      {data?.map((item, index) => (
        <TarifCard
          key={index}
          onclick={() => {
            navigate(`/tarif/detailed/${item.id}`);
            dispatch({ type: 'setTarifDetail', payload: item });
          }}
          {...item}
        />
      ))}
    </div>
  );
};

export default Tarifs;
