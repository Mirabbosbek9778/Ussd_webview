import React from 'react';
import { Segmented, Space } from 'antd';
import { MainTabIcon, Services, Settings } from '../iconsStyle/index.js';
import { Title } from './style.js';

const Navbar = () => (
  <div className='p-4 text-center rounded-t-lg bg-[var(--background-color)] '>
    <Space direction='vertical' style={{ backgroundColor: 'white' }}>
      <Segmented
        onChange={(e) => console.log(e)}
        color='white'
        options={[
          {
            label: (
              <div className='w-auto px-0  flex justify-center items-center flex-col'>
                <MainTabIcon />
                <Title className=''>Asosiy</Title>
              </div>
            ),
            value: 'user1',
          },
          {
            label: (
              <div className='flex justify-center items-center flex-col'>
                <Services />
                <Title>Xizmatlar</Title>
              </div>
            ),
            value: 'user2',
          },
          {
            label: (
              <div className='flex justify-center items-center flex-col'>
                <Settings />
                <Title>Sozlamalar</Title>
              </div>
            ),
            value: 'user3',
          },
        ]}
        size='middle'
      />
    </Space>
  </div>
);

export default Navbar;
