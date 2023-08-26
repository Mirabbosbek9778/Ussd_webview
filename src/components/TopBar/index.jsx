import { Wrapper, TextItem } from './style';
import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from '../iconsStyle';

const TopBar = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <ArrowIcon onClick={goBack} />
      <TextItem>{props.title}</TextItem>
      <div className='w-[24px] h-[24px]'></div>
    </Wrapper>
  );
};

export default TopBar;
