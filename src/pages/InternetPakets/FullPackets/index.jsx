import { useNavigate } from 'react-router-dom';
import { useInternet } from '../../../context/Internet';
import TopBar from '../../../components/TopBar';
import InternetCard from '../../../components/Generic/cards/InternetCard';

const InternetDetails = () => {
  const [{ packets }, dispatch] = useInternet();
  const navigate = useNavigate();
  return (
    <div>
      <div className='h-[89px]'></div>
      <TopBar title={'Internet paketlar'} />
      <div className='p-4'>
        <h1 className=' text-[var(--text-color)] text-[20px] font-[650]'>
          {packets?.status}
        </h1>
        <div className='mt-[16px] flex flex-col gap-4'>
          {packets?.data?.map((item, index) => (
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
      </div>
    </div>
  );
};

export default InternetDetails;
