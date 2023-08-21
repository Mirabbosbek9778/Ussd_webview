import React from 'react';
import TopBar from '../../components/TopBar';
import USSDList from "./Ussd"
const USSD = () => {
  return (
    <div className='bg-[var(--bg-color)]'>
      <TopBar />
      <USSDList />
    </div>
  );
};

export default USSD;
