import background from "../assets/bgn-industries.png";
import startup from "../assets/fly.png"
import BusinessPlanning from "../assets/cooperation.png"
import Strategy from "../assets/design-thinking.png"
import digital from "../assets/digital-campaign.png"
import networking from "../assets/social-media.png"
import Organisations from "../assets/organisation.png"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "./custom.css"
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    Aos.init({
      duration:1000
    })
      },[])
  return (
    <div className=" "> 
     <div className="relative">
     <img src={background} alt="" />
     </div>
      <div 
      className=" absolute top-32 w-9/12 m-auto ml-48">
       <div className="flex justify-between ">
       <div>
          <div className="flex items-center">
          <div className="bg-[#293F75] w-10 h-1"></div>
          <span className="text-2xl">WHERE CAN WE HELP YOU</span>
          </div>
          <p className="text-[#293F75] text-5xl font-bold">Consultancy</p>
          <p className="text-[#50dec8] text-5xl font-bold">Industries</p>
        </div>
        <div className="w-1/4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eum dolorem laudantium aspernatur voluptatum cumque voluptates, sit ex labore! Sapiente magnam inventore adipisci rem possimus harum ipsa aspernatur ullam!
        </div>
       </div>
        <div className="services mt-24">
          <div data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center">
            <img src={startup} className="w-20" alt="" />
            <div className="ml-5 ">
              <h2 className="text-2xl text-[#293f75] font-bold">Start Up</h2>
              <p>Interactively coordinate proactive e-commerce via process-centric outside the box thinking.</p>
            </div>
          </div>
          <div data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center">
            <img src={Organisations} className="w-20" alt="" />
            <div className="ml-5 ">
              <h2 className="text-2xl text-[#293f75] font-bold">Organisations</h2>
              <p>Seamlessly empower fully researched growth strategies and interoperable internal or organic sources.</p>
            </div>
          </div>
          <div data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center">
            <img src={BusinessPlanning} className="w-20" alt="" />
            <div className="ml-5 ">
              <h2 className="text-2xl text-[#293f75] font-bold">Business Planning</h2>
              <p>Podcasting operational change management inside of workflows to establish a framework.</p>
            </div>
          </div>
          <div data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center">
            <img src={networking} className="w-20" alt="" />
            <div className="ml-5 ">
              <h2 className="text-2xl text-[#293f75] font-bold">Networking</h2>
              <p>Networking is essential for building professional relationships and expanding opportunities.</p>
            </div>
          </div>
          <div data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center">
            <img src={Strategy} className="w-20" alt="" />
            <div className="ml-5 ">
              <h2 className="text-2xl text-[#293f75] font-bold">Strategy</h2>
              <p>Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
            </div>
          </div>
          <div data-aos="zoom-out-right" data-aos-duration="1000" className="flex items-center">
            <img src={digital} className="w-20" alt="" />
            <div className="ml-5 ">
              <h2 className="text-2xl text-[#293f75] font-bold">Start Up</h2>
              <p>Establishing strong professional networks can greatly enhance your digital marketing efforts and results.</p>
            </div>
          </div>
        </div>
        <hr className="mt-28"/>
        
        <button className="bg-[#293f75] viewmore font-bold rounded-md mt-5 text-white pt-3 pb-3 pr-7 pl-7">
                {" "}
              
               <span className="ml-3"> view All Industries</span>
              </button>
      </div> 
    </div>
  );
};

export default Service;
