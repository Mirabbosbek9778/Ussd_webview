<<<<<<< HEAD
import { Routes as BrowserRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import USSD from "../pages/USSD";
import Tarif from "../pages/TarifPage";
import InternetPakets from "../pages/InternetPakets/index";
import CallCenter from "../pages/CallCenter";
import Services from "../pages/Services";
import SingleServiceP from "../pages/Services/SingleServiceP";
=======
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import USSD from '../pages/USSD';
import Tarif from '../pages/TarifPage';
import InternetPakets from '../pages/InternetPakets/index';
import CallCenter from '../pages/CallCenter';
import SingleCard from '../components/SingleCardOff';
import Services from '../pages/Services';
import SingleServiceP from '../pages/Services/SingleServiceP';
import InternetFullpackets from '../pages/InternetPakets/Packets/FullPackets';
import InternetDetails from '../pages/InternetPakets/Packets/PacketDetail';
import TariffDetail from '../pages/TarifPage/Details';
>>>>>>> 4c70fd149e4f710622362184ada7e2d663ea52b2
export const Routes = () => (
  <BrowserRoutes>
    <Route path='/' element={<Home />} />
    <Route
      path='/discount'
      element={
        <>
          <h1>acsiyalar</h1>
        </>
      }
    />

    <Route path='/ussd' element={<USSD />} />
    <Route path='/tarif' element={<Tarif />} />
    <Route
      path='/plans'
      element={
        <>
          <h1>plans</h1>
        </>
      }
    />
    <Route path='/internet' element={<InternetPakets />} />
    <Route path='/services' element={<Services />} />
    <Route
      path='/sms'
      element={
        <>
          <h1>sms</h1>
        </>
      }
    />
    <Route path='/call-center' element={<CallCenter />} />
    <Route
      path='/restart'
      element={
        <>
          <h1>restart</h1>
        </>
      }
    />
<<<<<<< HEAD
    <Route path="/" element={<Home />} />
    <Route path="/discount" element={<h1>acsiyalar</h1>} />
=======
    <Route path='/single-cart' element={<SingleCard />} />

    <Route path='/' element={<Home />} />
    <Route path='/discount' element={<h1>acsiyalar</h1>} />
>>>>>>> 4c70fd149e4f710622362184ada7e2d663ea52b2
    <Route
      path='/settings'
      element={
        <>
          <h1>settings</h1>
        </>
      }
    />
    <Route
      path='/plans'
      element={
        <>
          <h1>plans</h1>
        </>
      }
    />
    <Route path='/internet' element={<InternetPakets />} />
    <Route path='/internet/full-packets' element={<InternetFullpackets />} />
    <Route path='/internet/:id' element={<InternetDetails />} />
    <Route
      path='/services'
      element={
        <>
          <h1>services</h1>
        </>
      }
    />
    <Route
      path='/sms'
      element={
        <>
          <h1>sms</h1>
        </>
      }
    />
    <Route
      path='/call-center'
      element={
        <>
          <h1>call-center</h1>
        </>
      }
    />
    <Route
      path='/restart'
      element={
        <>
          <h1>restart</h1>
        </>
      }
    />
    <Route path='/services/service/:id' element={<SingleServiceP />} />
    <Route path='/tarif/detailed/:id' element={<TariffDetail />} />
  </BrowserRoutes>
);
