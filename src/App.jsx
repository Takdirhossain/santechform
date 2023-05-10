
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


const router = createBrowserRouter(
  
    [
      {path:"/", element:<Home/>},
      {path:"/career", element:<Career/>},
      {path:"/clientReg", element:<ClientReg/>},
      {path:"/registation", element:<Registation/>},
      {path:"/CountryPackages", element:<CountryPackages/>},
    ]
  
);
function App() {
  return  <RouterProvider router={router} />
}

export default App;
