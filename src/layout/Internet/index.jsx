import React from 'react';
import TopBar from '../../components/TopBar';

const InternetLayout = ({ children }) => {
  return (
    <div>
      <TopBar title={'Internet paketlar'} />
      {children}
    </div>
  );
};

export default InternetLayout;
