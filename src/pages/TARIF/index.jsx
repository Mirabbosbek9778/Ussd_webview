import TopBar from '../../components/TopBar';
import Tabs from '../../components/Tabs';
import Tariflar from './Tariflar';
const Tarif = () => {
  const tabItems = [
    {
      key: '1',
      children: <Tariflar />,
      label: '“Barakali” tariflari',
    },
    {
      key: '2',
      children: <h1>Coming soon...</h1>,
      label: '“Units” tariflari',
    },
    {
      key: '3',
      children: <h1>Coming soon...</h1>,
      label: '“Milliy” tariflari',
    },
  ];
  return (
    <div className='bg-[var(--bg-color)] h-[100%] flex flex-col  '>
      <div className='h-[89px]'></div>
      <TopBar title={'Tarif rejalar'} />
      <Tabs items={tabItems} />
    </div>
  );
};

export default Tarif;
