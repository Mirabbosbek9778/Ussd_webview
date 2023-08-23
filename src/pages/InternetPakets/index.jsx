import React from 'react';
import TopBar from '../../components/TopBar';
import InternetCards from '../../components/InternetPackages/InternetCards';
import Packets from './Packets';
import Rouming from './Rouming';
import NonStop from './NonStop';
import Tabs from '../../components/Tabs';
const index = () => {
  const tabItems = [
    {
      key: '1',
      children: <Packets />,
      label: 'Internet paketlar',
    },
    {
      key: '2',
      children: <Rouming />,
      label: 'Rouming uchun',
    },
    {
      key: '3',
      children: <NonStop />,
      label: 'Non-stop paketlar',
    },
  ];
  return (
    <div className='bg-[var(--bg-color)] h-[100%] flex flex-col  '>
      <div className='h-[89px]'></div>
      <TopBar title={'Internet paketlar'} />
      <Tabs items={tabItems} />
    </div>
  );
};

export default index;
