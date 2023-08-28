import InternetCard from "../Generic/cards/InternetCard";
import { CardDiv, MainBtn } from "../Generic/cards/InternetCard/style";
import { useNavigate } from "react-router-dom";
const InternetCards = ({ pakets, name1 }) => {
  const navigate = useNavigate();
  const handleSeeAllClick = () => {
    navigate(`/internet/full-packets`);
  };
  return (
    <CardDiv>
      <h1 className=" text-[var(--text-color)] text-[20px] font-[650]">
        {name1}
      </h1>
      {pakets.slice(0, 3).map((item, index) => (
        <InternetCard key={index} item={item} />
      ))}
      <MainBtn onClick={handleSeeAllClick}>Barchasini Ko'rish</MainBtn>
    </CardDiv>
  );
};

export default InternetCards;
