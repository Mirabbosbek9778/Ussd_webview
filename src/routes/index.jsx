import { Outlet, useRoutes } from 'react-router-dom';
import { mainRoutes } from './module/main';
import { discountRoutes } from './module/discount';
import { settingsRoutes } from './module/settings';

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: (
        <>
          <h1>dfdsfds</h1>
          <Outlet />
        </>
      ),
      children: [...mainRoutes(), ...settingsRoutes(), ...discountRoutes()],
    },
  ]);
