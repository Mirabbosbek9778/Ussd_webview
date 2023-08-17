import { useState } from 'react';
import {
  MainTabIcon,
  Services,
  Settings,
  ActiveMainTabIcon,
  ActiveServices,
  ActiveSettings,
} from '../iconsStyle/index.js';
import { Title } from './style.js';

const Navbar = () => {
  const [active, setActive] = useState('');
  console.log(active);
  return (
    <div className='p-4 text-center rounded-t-lg bg-[var(--background-color)] mx-0 '>
      <div className='flex justify-center gap-16'>
        <div
          className='flex justify-center items-center flex-col cursor-pointer'
          onClick={() => setActive('main')}
        >
          {active == 'main' ? <ActiveMainTabIcon /> : <MainTabIcon />}
          <Title color={active == 'main' && true}>Asosiy</Title>
        </div>
        <div
          className='flex justify-center items-center flex-col cursor-pointer'
          onClick={() => setActive('services')}
        >
          {active == 'services' ? <ActiveServices /> : <Services />}
          <Title color={active == 'services' && true}>Xizmatlar</Title>
        </div>
        <div
          className='flex justify-center items-center flex-col cursor-pointer'
          onClick={() => setActive('settings')}
        >
          {active == 'settings' ? <ActiveSettings /> : <Settings />}
          <Title color={active == 'settings' && true}>Sozlamalar</Title>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
