import { Routes as BrowserRoutes, Route} from 'react-router-dom';
import Home from "../pages/Home"
import USSD from '../pages/USSD';
import InternetPakets from "../pages/InternetPakets"
export const Routes = () =>(
  <BrowserRoutes>
     <Route path='/' element={<Home />} />
     <Route path='/discount' element={<><h1>acsiyalar</h1></>} />
     <Route path='/settings' element={<><h1>settings</h1></>} />
     <Route path='/ussd' element={<USSD/>} />
     <Route path='/plans' element={<><h1>plans</h1></>} />
     <Route path='/internet' element={<InternetPakets/>} />
     <Route path='/services' element={<><h1>services</h1></>} />
     <Route path='/sms' element={<><h1>sms</h1></>} />
     <Route path='/call-center' element={<><h1>call-center</h1></>} />

  </BrowserRoutes>
)
