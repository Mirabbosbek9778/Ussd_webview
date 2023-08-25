import { Routes as BrowserRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import USSD from "../pages/USSD";
import Tarif from "../pages/TARIF";
import InternetPakets from "../pages/InternetPakets/index";
import CallCenter from "../pages/CallCenter";
import SingleCard from "../components/SingleCardOff";
import Services from "../pages/Services";
import SingleServiceP from "../pages/Services/SingleServiceP";
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

    <Route path="/" element={<Home />} />
    <Route path="/discount" element={<h1>acsiyalar</h1>} />
    <Route
      path="/settings"
      element={
        <>
          <h1>settings</h1>
        </>
      }
    />
    <Route
      path="/plans"
      element={
        <>
          <h1>plans</h1>
        </>
      }
    />
    <Route path="/internet" element={<InternetPakets />} />
    <Route
      path="/internet/full-packets"
      element={
        <>
          <h1>inter</h1>
        </>
      }
    />
    <Route path="/internet/full-packets" element={<InternetDetails />} />
    <Route
      path="/services"
      element={
        <>
          <h1>services</h1>
        </>
      }
    />
    <Route
      path="/sms"
      element={
        <>
          <h1>sms</h1>
        </>
      }
    />
    <Route
      path="/call-center"
      element={
        <>
          <h1>call-center</h1>
        </>
      }
    />
    <Route
      path="/restart"
      element={
        <>
          <h1>restart</h1>
        </>
      }
    />

    <Route
      path="/tarif/detailed/:id"
      element={
        <>
          <h1>ddd</h1>
        </>
      }
    />
    <Route path="/services/service/:id" element={<SingleServiceP />} />
    <Route path="/tarif/detailed/:id" element={<Details />} />
  </BrowserRoutes>
);
