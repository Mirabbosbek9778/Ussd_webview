import React from 'react';
// import CaruselTarif from '../../components/CaruselTarif'
import TopBar from '../../components/TopBar';
import CardsTarif from '../../components/CardsTarif';
import Tarifs from '../../components/Tarifs';

const Tarif = () => {
  return (
    <div>
      <div className='h-[89px]'></div>
      <TopBar title='Tarif rejalar' />
      <CardsTarif />
    </div>
  );
};

export default Tarif;
