import InternetCards from '../../../components/InternetPackages/InternetCards';
import { internet } from '../../../mock/category';

const Packets = () => {
  return (
    <>
      {internet.map((item, index) => (
        <InternetCards key={index} {...item} />
      ))}
    </>
  );
};

export default Packets;
