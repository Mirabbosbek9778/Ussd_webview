import React from 'react';
import TopBar from '../../components/TopBar';

import { UssdCodes } from '../../mock/category';
import USSDCard from '../../components/UssdCard/USSDCard';
const USSD = () => {
  const getUSDDAndroid = (e) => {
    window?.Android?.callUssd(e);
    window?.webkit?.messageHandlers?.callUssd.postMessage(e);
  };
  return (
    <div className='bg-[var(--bg-color)]'>
      <div className='h-[89px]'></div>
      <TopBar title={'USSD kodlar'} />
      <div className='w-[100%] overflow-y-auto gap-4 flex flex-col px-4 mt-4 pb-4'>
        {UssdCodes.map((item) => (
          <USSDCard onclick={getUSDDAndroid} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default USSD;
