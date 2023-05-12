import { useState } from "react";

import "../style/style.css";
import Logo from "../assets/oterhs/logo (1).png"
import logo2 from "../assets/oterhs/logo -light.png"
import aboutus from "../assets/oterhs/construccion.jpg"
import Electrical from "../assets/services/electrical.jpg"
import servicehover from "../assets/oterhs/logo-item.png"
import carpenter from "../assets/services/carpenter.jpg"
import cleaner from "../assets/services/cleaner.jpg"
import garderning from "../assets/services/garderning.jpg"
import plumbing from "../assets/services/plumbing.jpg"
import system from "../assets/services/system.jpg"
import permises from "../assets/oterhs/pexels-life-of-pix-8092.jpg"
import Enterprice from "./Enterprice";
import Indivisiul from "./Indivisiul";

const Home = () => {
  const [element, setElement] = useState(false);
 const [enterprice, setEnterprice] = useState(false)
 const [indivisul, setIndivisul] = useState(false)
  return (
    <div>
      {
        element ? <></>
        :
        <div onClick={() => setElement(true)} class="floating-section">
        <div  class="floating-container">
          <img  src={Logo} alt="Company Logo" />
          <h2 class="floating-title">Select your profile</h2>
          <a onClick={()=> setEnterprice(true)} class="floating-link">
            <div class="floating-enterprice">
              <h2 class="title-secondary">Enterprise</h2>
            </div>
          </a>
          <a onClick={()=> setIndivisul(true)} class="floating-link" >
            <div class="floating-customer">
              <h2 class="title-secondary">Individual</h2>
            </div>
          </a>
        </div>
       
      </div>
     
      }
      {
        enterprice && <Enterprice/>
      }
   {
    indivisul && <Indivisiul/>
   }
    </div>
  );
};

export default Home;
