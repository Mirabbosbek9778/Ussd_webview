import Carosel from "../../components/Carusel";
import { category } from "../../mock/category";
import CategoryCard from "../../components/Generic/cards/Category-card";
import Navbar from "../../components/Navbar";
import TopDriver from "../../components/driver/Top-driver";
const index = () => {
  return (
    <div className="w-full">
      <TopDriver />
      <Carosel />
      <div className="category-card-layout">
        {category?.map((el) => (
          <CategoryCard key={el.id} icon={el.icon} title={el.name} />
        ))}
      </div>

      <div className="w-full absolute bottom-0 left-0 right-0 z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default index;
