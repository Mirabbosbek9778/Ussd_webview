import InternetCard from '../../../../components/Generic/cards/InternetCard';
import TopBar from '../../../../components/TopBar';
import { internet } from '../../../../mock/category';
const InternetDetails = () => {
  return (
    <div>
      <div className='h-[89px]'></div>
      <TopBar title={'Internet paketlar'} />
      <div className='p-4'>
        <h1 className=' text-[var(--text-color)] text-[20px] font-[650]'>
          {internet[0].name1}
        </h1>
        <div className='mt-[16px] flex flex-col gap-4'>
          {internet[0].pakets.map((item, index) => (
            <InternetCard item={item} fullCard={'true'} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternetDetails;
