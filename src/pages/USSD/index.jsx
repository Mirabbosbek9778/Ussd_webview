import TopBar from '../../components/TopBar';
import { UssdCodes } from '../../mock/ussdkodlarUz';
import { UssdMobiUz } from '../../mock/ussdMobi';
import { UssdCodesUcell } from '../../mock/ussdCodesUcell';
import { UssdCodesBeeline } from '../../mock/ussdCodesBeeline';
import USSDCard from '../../components/UssdCard/USSDCard';
import { callUssd } from '../../utils';
import { useCompany } from '../../context/useContext';

const USSD = () => {
  const [state] = useCompany();
  const UssdCodesAll = {
    uzmobile: UssdCodes,
    beeline: UssdCodesBeeline,
    ucell: UssdCodesUcell,
    mobiuz: UssdMobiUz,
  };

  return (
    <div className='bg-[var(--bg-color)]'>
      <div className='h-[89px]'></div>
      <TopBar title={'USSD kodlar'} />
      <div className='w-[100%] overflow-y-auto gap-4 flex flex-col px-4 mt-4 pb-4'>
        {UssdCodesAll[state?.company].map((item) => (
          <USSDCard onclick={callUssd} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default USSD;
