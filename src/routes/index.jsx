import { Routes as BrowserRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import USSD from "../pages/USSD";
import Tarif from "../pages/TARIF";
import InternetPakets from "../pages/InternetPakets/index";
import CallCenter from "../pages/CallCenter";
import SingleCard from "../components/SingleCardOff";
import Services from "../pages/Services";
export const Routes = () => (
  <BrowserRoutes>
    <Route path="/" element={<Home />} />
    <Route
      path="/discount"
      element={
        <>
          <h1>acsiyalar</h1>
        </>
      }
    />
    <Route
      path="/settings"
      element={
        <>
          <h1>settings</h1>
        </>
      }
    />
    <Route path="/ussd" element={<USSD />} />
    <Route path="/tarif" element={<Tarif />} />
    <Route
      path="/plans"
      element={
        <>
          <h1>plans</h1>
        </>
      }
    />
    <Route path="/internet" element={<InternetPakets />} />
    <Route path="/services" element={<Services />} />
    <Route
      path="/sms"
      element={
        <>
          <h1>sms</h1>
        </>
      }
    />
    <Route path="/call-center" element={<CallCenter />} />
    <Route
      path="/restart"
      element={
        <>
          <h1>restart</h1>
        </>
      }
    />
    <Route path="/single-cart" element={<SingleCard />} />
  </BrowserRoutes>
);
