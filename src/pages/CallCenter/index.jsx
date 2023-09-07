import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import { CallCenterCodes } from '../../mock/CallCenterkodlarUztelecom';
import { OperatorCards, OperatorSingleCard } from './style';
const index = () => {
  const [state, setstate] = useState(false);
  const handleLinkClick = (item1) => {
    if (+item1 === Number) {
    }
  };
  return (
    <div className='h-[100vh] bg-[var(--background-color)]'>
      <TopBar title={'Operator bilan aloqa'} />
      <OperatorCards>
        <p className='text-center py-4 font-[600]'>
          "UZTELECOM" Qo'llab-quvvatlash markazi
        </p>
        {CallCenterCodes.map((item, index) => (
          <OperatorSingleCard className='flex ' key={index}>
            <div className='w-[30px] h-[40px]  mt-2 mr-1  flex items-center justify-center rounded-lg bg-[var(--border-color)] '>
              {' '}
              <img
                src={item.icon}
                alt='img'
                className='w-[25px] h-[25px] text-[var(--icon-color)]'
              />
            </div>
            <div
              className='flex flex-col px-[5px] '
              onClick={() => handleLinkClick(item.ussdCode)}
            >
              {!state ? (
                <p className='text-[var(--ussd-color)] font-[600] pt-[5px]'>
                  {item.ussdCode}
                </p>
              ) : (
                <a
                  href={item.ussdCode}
                  className='text-[var(--ussd-color)] font-[600] pt-[5px]'
                >
                  {item.ussdCode}
                </a>
              )}
              <p className='text-[10px] py-[4px] text-[var(--item-color)] '>
                {item.description}
              </p>
            </div>
          </OperatorSingleCard>
        ))}
      </OperatorCards>
    </div>
  );
};

export default index;
