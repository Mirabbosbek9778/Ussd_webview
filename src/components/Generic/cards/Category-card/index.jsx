import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryCardArrow } from '../../../iconsStyle/index.js';
export default function CategoryCard({ icon, title, path }) {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className='category-card' onClick={() => navigate(path)}>
        <div className='flex items-center justify-between'>
          <img className='w-[24px] h-[24px]' src={icon} alt='icon' />
          <p className='font-bold  ml-[8px] text-[var(--text-color)] '>
            {title}
          </p>
        </div>
        <CategoryCardArrow />
      </div>
    </Fragment>
  );
}
