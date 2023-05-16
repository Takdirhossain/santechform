import Home from "./pages/Home";
import ClientReg from "./pages/ClientReg";
import Career from "./pages/Career";
import Registation from "./pages/Registation";
import CountryPackages from "./pages/Package";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Enterprice from "./pages/Enterprice";
import { ServicesSliderIndivisiul } from "./components/Subscribe";

import Error from "./components/Error";
import ContactwithUs from "./pages/ContactwithUs";
import About from "./pages/About";
import TremsAndCondition from "./pages/TremsAndCondition";
import Privacyandpolicy from "./pages/Privacyandpolicy";
import PaymentPolicy from "./pages/PaymentPolicy";
import Priceing from "./pages/Priceing";
import Shipping from "./pages/Shipping";
import Management from "./pages/Management";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/career", element: <Career /> },
  { path: "/regenterprice", element: <CountryPackages /> },
  { path: "/regindividual", element: <ClientReg /> },
  { path: "/registation", element: <Registation /> },
  { path: "/aboutus", element: <About /> },
  { path: "/cancellation", element: <PaymentPolicy /> },
  { path: "/contract", element: <ContactwithUs /> },
  { path: "/privacy", element: <Privacyandpolicy /> },
  { path: "/trames", element: <TremsAndCondition /> },
  { path: "/priceing", element: <Priceing /> },
  { path: "/shipping", element: <Shipping /> },
  { path: "/management", element: <Management /> },
  { path: "*", element: <Error /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
