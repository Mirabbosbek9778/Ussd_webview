import { Fragment } from "react";
import { CategoryCardArrow } from "../../../iconsStyle/index.js";
export default function CategoryCard({ icon, title }) {
  return (
    <Fragment>
      <div className=" w-11/12 flex items-center my-5 cursor-pointer select-none py-4 px-[14px]  h-[61px] bg-[var(--card-color)] rounded-xl justify-around shadow">
        <div className="w-[200px] flex items-center justify-between">
          <img className="w-[40px]" src={icon} alt="icon" />
          <p className="font-bold text-[16px] text-[var(--text-color)] ">{title}</p>
        </div>
        <CategoryCardArrow />
      </div>
    </Fragment>
  );
}
