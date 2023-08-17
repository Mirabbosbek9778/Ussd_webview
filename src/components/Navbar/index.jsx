import React from 'react';
import { Tabs } from 'antd';
import { MainTabIcon, Services, Settings } from '../iconsStyle/index.js';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: <MainTabIcon />,
  },
  {
    key: '2',
    label: (
      <>
        <Services /> <p>Xizmatlar</p>
      </>
    ),
    closeIcon: false,
  },
  {
    key: '3',
    label: <Settings />,
  },
];

const Navbar = () => (
  <Tabs
    defaultActiveKey='1'
    tabPosition='bottom'
    items={items}
    type='line'
    centered
    animated='false'
    moreIcon='false'
    onTabScroll={(e) => {
      console.log(e);
    }}
    onChange={onChange}
  />
);

export default Navbar;
