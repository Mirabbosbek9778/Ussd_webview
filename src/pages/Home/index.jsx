import Carosel from "../../components/Carusel";
import { category } from "../../mock/category";
import CategoryCard from "../../components/Generic/cards/Category-card";
import Navbar from "../../components/Navbar";
const index = () => {
  return (
    <div className="w-full ">
      <Carosel />
      <div className="w-full  flex flex-col items-center">
        {category?.map((el) => (
          <CategoryCard key={el.id} icon={el.icon} title={el.name} />
        ))}
      </div>

      <div className="w-full absolute bottom-0 ">
        <Navbar />
      </div>
    </div>
  );
};

export default index;
