import React from 'react';
import { InternetDiv } from './style';
const InternetCard = ({ package_name, price, deadline }) => {
  return (
    <InternetDiv>
      <div className=' text-[var(--ussd-color)] text-[20px] font-[550] '>
        {package_name}
      </div>
      <div className=' flex justify-between w-full'>
        <p className='text-[12px] text-[var(--arrow-icon-color)]'>
          To'plam narxi
        </p>
        <p className='text-[var(--text-color)] text-[14px] font-[500]'>
          {price}
        </p>
      </div>
      <div className=' flex justify-between w-full'>
        <p className='text-[12px] text-[var(--arrow-icon-color)] '>
          Amal qilish muddati
        </p>
        <p className='font-[500] text-[14px]'>{deadline}</p>
      </div>
    </InternetDiv>
  );
};

export default InternetCard;
