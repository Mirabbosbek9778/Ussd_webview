import { Routes as BrowserRoutes, Route} from 'react-router-dom';
// import { mainRoutes } from './module/main';
// import { discountRoutes } from './module/discount';
// import { settingsRoutes } from './module/settings';

export const Routes = () =>(
  <BrowserRoutes>
     <Route path='/' element={<><h1>home</h1></>} />
     <Route path='/discount' element={<><h1>acsiyalar</h1></>} />
     <Route path='/settings' element={<><h1>settings</h1></>} />

     <Route path='/ussd' element={<><h1>usss</h1></>} />
     <Route path='/plans' element={<><h1>plans</h1></>} />
     <Route path='/internet' element={<><h1>internet</h1></>} />
     <Route path='/services' element={<><h1>services</h1></>} />
     <Route path='/sms' element={<><h1>sms</h1></>} />
     <Route path='/call-center' element={<><h1>call-center</h1></>} />




  </BrowserRoutes>
)
