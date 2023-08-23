import InternetCards from '../../../components/InternetPackages/InternetCards';
import { internet } from '../../../mock/category';

const Packets = () => {
  return (
    <div className='flex flex-col gap-4 my-5 mr-4'>
      {internet.map((item, index) => (
        <InternetCards key={index} {...item} />
      ))}
    </div>
  );
};

export default Packets;
