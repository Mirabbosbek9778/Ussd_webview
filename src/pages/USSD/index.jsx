import TopBar from '../../components/TopBar';
import { UssdCodes } from '../../mock/ussdkodlar';
import USSDCard from '../../components/UssdCard/USSDCard';
import { callUssd } from '../../utils';
const USSD = () => {
  return (
    <div className='bg-[var(--bg-color)]'>
      <div className='h-[89px]'></div>
      <TopBar title={'USSD kodlar'} />
      <div className='w-[100%] overflow-y-auto gap-4 flex flex-col px-4 mt-4 pb-4'>
        {UssdCodes.map((item) => (
          <USSDCard onclick={callUssd} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default USSD;
