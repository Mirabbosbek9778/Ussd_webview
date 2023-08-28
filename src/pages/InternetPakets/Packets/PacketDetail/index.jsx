import React, { useEffect, useState } from 'react';
import TopBar from '../../../../components/TopBar';
import { useParams } from 'react-router-dom';
import { tariff } from '../../../../mock/category';
import TarifCard from '../../../../components/Generic/cards/TarifCard';
import Copy from '../../../../components/Copy';
import SingleCard from '../../../../components/Description';

const PacketDetail = () => {
  const [filter, setFilter] = useState([]);
  const param = useParams();

  useEffect(() => {
    let res = tariff[0].tarifs.filter(
      (item) => item.id.toString() === param.id
    );
    setFilter(res);
  }, [param.id]);
  return (
    <>
      <div className='h-[89px]'></div>
      <TopBar title='Tarif Rejalar' />
      <div className='flex flex-col p-4 gap-4'>
        <TarifCard {...filter[0]} detail />
        <Copy />
        <SingleCard {...filter[0]} />
      </div>
    </>
  );
};

export default PacketDetail;
