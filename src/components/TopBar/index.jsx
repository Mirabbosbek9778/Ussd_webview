import { Wrapper, TextItem } from './style';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../iconsStyle';

const TopBar = (props) => {
  return (
    <Wrapper>
      <Link to={'/'}>
        <ArrowIcon />
      </Link>
      <TextItem>{props.title}</TextItem>
      <div className='w-[24px] h-[24px]'></div>
    </Wrapper>
  );
};

export default TopBar;
