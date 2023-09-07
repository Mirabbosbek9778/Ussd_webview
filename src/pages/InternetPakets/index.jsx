import React from 'react';
import TopBar from '../../components/TopBar';
import Packets from './Packets';
// import Rouming from './Rouming';
// import NonStop from './NonStop';
import Tabs from '../../components/Tabs';
import { useCompany } from '../../context/Company';
import { internetUcell } from '../../mock/internetUcell';
import { internetMobiuz } from '../../mock/internetMobi';
import { internetUzmobile } from '../../mock/internets';
import { internetBeeline } from '../../mock/internetBeeline';
import NonStop from './Non-stop';

const tarifTabItems = (e) =>
  e.map((item, index) => ({
    key: index,
    children:
      item?.category == 'Non-stop' ? (
        <NonStop data={item} />
      ) : (
        <Packets data={item?.pakets} />
      ),
    label: item?.category,
  }));

const InternetPackets = () => {
  const [state] = useCompany();
  const UssdCodesAll = {
    uzmobile: internetUzmobile,
    beeline: internetBeeline,
    ucell: internetUcell,
    mobiuz: internetMobiuz,
  };
  return (
    <div className='bg-[var(--bg-color)] h-[100%] flex flex-col  '>
      <div className='h-[89px]'></div>
      <TopBar title={'Internet paketlar'} />
      <Tabs items={tarifTabItems(UssdCodesAll[state?.company])} />
    </div>
  );
};

export default InternetPackets;
