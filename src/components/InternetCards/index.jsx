import { useInternet } from '../../context/Internet';
import InternetCard from '../Generic/cards/InternetCard';
import { CardDiv, MainBtn } from '../Generic/cards/InternetCard/style';
import { useNavigate } from 'react-router-dom';
const InternetCards = ({ data: { data, status } }) => {
  const [, dispatch] = useInternet();
  const navigate = useNavigate();
  const handleSeeAllClick = () => {
    dispatch({ type: 'setPackets', payload: { data, status } });
    navigate(`/internet/full-packets`);
  };
  return (
    <CardDiv>
      <h1 className=' text-[var(--text-color)] text-[20px] font-[650]'>
        {status}
      </h1>
      {data.slice(0, 3).map((item, index) => (
        <InternetCard key={index} item={item} />
      ))}
      <MainBtn onClick={handleSeeAllClick}>Barchasini Ko'rish</MainBtn>
    </CardDiv>
  );
};

export default InternetCards;
