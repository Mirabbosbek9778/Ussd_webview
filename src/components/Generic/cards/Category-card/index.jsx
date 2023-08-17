import { Fragment } from "react";
import { CategoryCardArrow } from "../../../iconsStyle/index.js";
export default function CategoryCard({ icon, title }) {
  return (
    <Fragment>
      <div className=" w-11/12 flex items-center my-5 h-[90px] bg-[var(--card-color)] rounded-xl justify-around shadow">
        <div className="w-[200px] flex items-center justify-between">
          <img className="w-[40px]" src={icon} alt="icon" />
          <p className="font-bold text-xl">{title}</p>
        </div>
        <CategoryCardArrow />
      </div>
    </Fragment>
  );
}
