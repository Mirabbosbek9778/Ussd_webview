import { Fragment } from 'react';
import { CategoryCardArrow } from '../../../iconsStyle/index.js';
export default function CategoryCard({ icon, title }) {
  return (
    <Fragment>
      <div className='category-card'>
        <div className='flex items-center justify-between'>
          <img className='w-[24px] h-[24px]' src={icon} alt='icon' />
          <p className='font-bold text-[var(--text-width)] ml-[8px] text-[var(--text-color)] '>
            {title}
          </p>
        </div>
        <CategoryCardArrow />
      </div>
    </Fragment>
  );
}
