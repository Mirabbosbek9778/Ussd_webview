import React, { useEffect, useState } from 'react';
import TopBar from '../../../components/TopBar';
import { useParams } from 'react-router-dom';
import TarifCard from '../../../components/Generic/cards/TarifCard';
import Copy from '../../../components/Copy';
import SingleCard from '../../../components/Description';
import { tariffUzmobile } from '../../../mock/tarifCategory';
import { useCompany } from '../../../context/Company';

const Details = () => {
  const param = useParams();

  const [{ tarifDetail }] = useCompany();
  console.log(tarifDetail);

  return (
    <>
      <div className='h-[89px]'></div>
      <TopBar title='Tarif Rejalar' />
      <div className='flex flex-col p-4 gap-4'>
        <TarifCard {...tarifDetail} detail />
        <Copy activate={tarifDetail?.ussd_code} />
        <SingleCard {...tarifDetail} />
      </div>
    </>
  );
};

export default Details;
