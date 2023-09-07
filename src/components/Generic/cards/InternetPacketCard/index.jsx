import { Container, CardWrap, Text, Titletext } from './style';
import {
  InternetMenuIcon,
  WalletIcon,
  ClockIcon,
} from '../../../../components/iconsStyle';
const InternetPacketCard = ({ package_name, price, deadline, onclick }) => {
  return (
    <Container onClick={onclick}>
      <Titletext>{package_name}</Titletext>
      <CardWrap>
        <div className='flex items-center justify-between '>
          <div className='flex items-center '>
            <div className='p-2  rounded-lg bg-[var(--border-color)] '>
              <InternetMenuIcon />
            </div>
            <p className='text-[#5A5A5A] ml-[10px] text-base'>
              Ajratilgan trafik
            </p>
          </div>
          <Text>{package_name}</Text>
        </div>
        <div className='flex items-center justify-between '>
          <div className='flex items-center '>
            <div className='p-2  rounded-lg bg-[var(--border-color)] '>
              <ClockIcon />
            </div>
            <p className='text-[#5A5A5A] ml-[10px] text-base'>
              Amal qilish muddati
            </p>
          </div>
          <Text>{deadline}</Text>
        </div>
      </CardWrap>

      <Titletext.Title>
        <div className='flex items-center '>
          <div className='p-2  rounded-lg bg-[var(--border-color)] '>
            <WalletIcon />
          </div>
          <p className='text-[#5A5A5A] ml-[10px] text-base'>Paket narxi</p>
        </div>
        <Text $detail>{price} so'm/oy</Text>
      </Titletext.Title>
    </Container>
  );
};

export default InternetPacketCard;
