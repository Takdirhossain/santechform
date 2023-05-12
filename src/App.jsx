
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
import Aboutus from "./pages/aboutus";
import Cancellation from "./pages/cancellation";
import Contanctus from "./pages/contanctus";
import Allpackages from "./pages/Allpackages";
import Privacy from "./pages/privacy";
import Trames from "./pages/terms";
import Error from "./components/Error";


const router = createBrowserRouter(
  
    [
      {path:"/", element:<Home/>},
      {path:"/career", element:<Career/>},
      {path:"/clientregistration", element:<ClientReg/>},
      {path:"/registation", element:<Registation/>},
      {path:"/aboutus", element:<Aboutus/>},
      {path:"/cancellation", element:<Cancellation/>},
      {path:"/contanctus", element:<Contanctus/>},
      {path:"/privacy", element:<Privacy/>},
      {path:"/trames", element:<Trames/>},
      {path: "*", element:<Error/>}
    ]
  
);
function App() {
  return  <RouterProvider router={router} />
}

export default App;
