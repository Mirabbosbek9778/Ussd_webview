import Carosel from '../../components/Carusel';
import { category } from '../../mock/category';
import CategoryCard from '../../components/Generic/cards/Category-card';
import Navbar from '../../components/Navbar';
import TopDriver from '../../components/driver/Top-driver';
const index = () => {
  return (
    <div className='w-full'>
      <div className='fixed top-0 left-0 right-0 max-w-[700px] min-w-[375px] mx-auto text-center'>
        <TopDriver />
        <Carosel />
      </div>
      <div className='h-[234px]'></div>
      <div className='category-card-layout'>
        {category?.map((el) => (
          <CategoryCard
            key={el.id}
            path={el.path}
            icon={el.icon}
            title={el.name}
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default index;
