import { Container, CardWrap, Text, Titletext } from './style';
import {
  MessageIcon,
  PhoneIcon,
  InternetMenuIcon,
  WalletIcon,
} from '../../../../components/iconsStyle';
const TarifCard = ({
  package_name,
  internet,
  price,
  minutes,
  sms,
  onclick,
  detail,
}) => {
  return (
    <Container onClick={onclick}>
      <Titletext>{package_name}</Titletext>
      <CardWrap>
        <div className='flex justify-between items-center '>
          <div className='flex items-center '>
            <div className='p-2  rounded-lg bg-[var(--border-color)] '>
              <InternetMenuIcon />
            </div>
            <p className='text-[#5A5A5A] ml-[10px] text-base'>Internet</p>
          </div>
          <Text>{internet}</Text>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center '>
            <div className='p-2  rounded-lg bg-[var(--border-color)] '>
              <PhoneIcon />
            </div>
            <p className='text-[#5A5A5A] ml-[10px] text-base'>Daqiqalar</p>
          </div>
          <Text>{minutes}</Text>
        </div>
        <div className='flex justify-between items-center '>
          <div className='flex items-center '>
            <div className='p-2  rounded-lg bg-[var(--border-color)] '>
              <MessageIcon />
            </div>
            <p className='text-[#5A5A5A] ml-[10px] text-base'>Internet</p>
          </div>
          <Text>{sms}</Text>
        </div>
      </CardWrap>
      {detail ? (
        <Titletext.Title>
          <div className='flex items-center '>
            <div className='p-2  rounded-lg bg-[var(--border-color)] '>
              <WalletIcon />
            </div>
            <p className='text-[#5A5A5A] ml-[10px] text-base'>Oylik to'lov</p>
          </div>
          <Text $detail>{price} so'm/oy</Text>
        </Titletext.Title>
      ) : (
        <Titletext.Title>
          <p className='text-[#858585]'>Abonent to'lovi</p>
          <Text>{price} so'm/oy</Text>
        </Titletext.Title>
      )}
    </Container>
  );
};

export default TarifCard;
