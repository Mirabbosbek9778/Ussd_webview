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
  const [active, setActive] = useState('services');
  return (
    <div className='p-[16px] fixed text-center bottom-0 max-w-[700px] z-10 left-0 right-0  rounded-t-lg bg-[var(--background-color)] my-0 mx-auto'>
      <div className='flex justify-around gap-16'>
        <div
          className='flex justify-center items-center flex-col cursor-pointer'
          onClick={() => setActive('main')}
        >
          {active == 'main' ? <ActiveMainTabIcon /> : <MainTabIcon />}
          <Title color={active == 'main' ? 'true' : ''}>Asosiy</Title>
        </div>
        <div
          className='flex justify-center items-center flex-col cursor-pointer'
          onClick={() => setActive('services')}
        >
          {active == 'services' ? <ActiveServices /> : <Services />}
          <Title color={active == 'services' ? 'true' : ''}>Xizmatlar</Title>
        </div>
        <div
          className='flex justify-center items-center flex-col cursor-pointer'
          onClick={() => setActive('settings')}
        >
          {active == 'settings' ? <ActiveSettings /> : <Settings />}
          <Title color={active == 'settings' ? 'true' : ''}>Sozlamalar</Title>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
