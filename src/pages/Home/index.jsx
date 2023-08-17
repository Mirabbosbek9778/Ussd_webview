import Carosel from '../../components/Carusel';
import Navbar from '../../components/Navbar';
const index = () => {
  return (
    <div className='w-full '>
      <Carosel />
      <div className='w-full absolute bottom-0 '>
        <Navbar />
      </div>
    </div>
  );
};

export default index;
