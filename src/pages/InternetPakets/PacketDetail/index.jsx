import TopBar from '../../../components/TopBar';
import InternetCard from '../../../components/Generic/cards/InternetPacketCard';
import Copy from '../../../components/Copy';
import SingleCard from '../../../components/Description';
import { useInternet } from '../../../context/useContext';
const PacketDetail = () => {
  const [{ packetsDetail }] = useInternet();
  return (
    <>
      <div className='h-[89px]'></div>
      <TopBar title='Internet paketlar' />
      <div className='flex flex-col p-4 gap-4'>
        <InternetCard {...packetsDetail} detail />
        <Copy activate={packetsDetail?.ussd_code} />
        <SingleCard {...packetsDetail} />
      </div>
    </>
  );
};

export default PacketDetail;
