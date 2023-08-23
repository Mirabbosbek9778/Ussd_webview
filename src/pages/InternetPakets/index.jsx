import React, { Fragment } from 'react';
import TopBar from '../../components/TopBar';
import { internet, internetDaily } from '../../mock/category';

import InternetCards from '../../components/Generic/cards/InternetCARDLAR/InternetCards';
const index = () => {
  return (
    <div className='bg-[var(--bg-color)] h-[100%] flex flex-col  '>
      <div className='h-[89px]'></div>
      <TopBar />
      <InternetCards type={internet[0].name} data={internet[0].pakets} />
      <div className='mt-4'>
        <InternetCards
          type={internetDaily[0].name}
          data={internetDaily[0].pakets}
        />
      </div>
    </div>
  );
};

export default index;
