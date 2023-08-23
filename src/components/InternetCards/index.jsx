import InternetCard from '../Generic/cards/InternetCard/InternetCard';
import { CardDiv, MainBtn } from '../Generic/cards/InternetCard/style';
const InternetCards = ({ pakets, name1 }) => {
  return (
    <CardDiv>
      <h1 className=' text-[var(--text-color)] text-[20px] font-[650]'>
        {name1}
      </h1>
      {pakets.map((item, index) => (
        <InternetCard key={index} {...item} />
      ))}
      <MainBtn>Barchasini Ko'rish</MainBtn>
    </CardDiv>
  );
};

export default InternetCards;
