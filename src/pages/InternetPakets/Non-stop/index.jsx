import InternetCard from '../../../components/Generic/cards/InternetCard';
import { Link, useNavigate } from 'react-router-dom';
import { useInternet } from '../../../context/useContext';

const NonStop = ({ data }) => {
  const navigate = useNavigate();
  const [, dispatch] = useInternet();

  return (
    <div className='my-[16px] mr-4 flex flex-col gap-4'>
      {data.pakets.map((item, index) => (
        <div
          onClick={() => {
            navigate(`/internet/${item.id}`);
            dispatch({ type: 'setPacketDetail', payload: item });
          }}
          key={index}
        >
          <InternetCard item={item} fullCard={'true'} />
        </div>
      ))}
    </div>
  );
};

export default NonStop;
