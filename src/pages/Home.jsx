import { useEffect, useState } from "react";

import "../style/home.css";
import Logo from "../assets/oterhs/logo (1).png"
import logo2 from "../assets/oterhs/logo -light.png"

import Enterprice from "./Enterprice";
import Indivisiul from "./Indivisiul";
import useTitle from "../hooks/usetitle";
import video from "../assets/video/Business Consulting Background - iStock Video.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [element, setElement] = useState(false);
 const [enterprice, setEnterprice] = useState(false)
 const [indivisul, setIndivisul] = useState(false)
 useTitle("Welcome To Letusmaintain")

 useEffect(() => {
  AOS.init({
    duration:1000
  })
    },[])
  return (
    <div>
      {
        element ? <></>
        :
        <div   className={`relative ${enterprice ? 'hidden' : ''}`}>
       <video src={video}  autoPlay muted loop className="absolute   inset-0 w-screen h-screen object-cover"></video>
       <div  class=" absolute top-64 left-72 floating-container">
          <img  src={logo2} alt="Company Logo" />
          <h2 class="floating-title"></h2>
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
