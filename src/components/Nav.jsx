import logo from "../assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./custom.css";
import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/img-slider-01.jpg";
import slide2 from "../assets/img-slider-02.jpg";
import slide3 from "../assets/img-slider-03.jpg";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import ser4 from "../assets/ser4.png";
import "aos/dist/aos.css";
import Aos from "aos";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from "@mui/icons-material/Menu";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const [cat, setcat] = useState(false);
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <section className="w-full block">
      <Carousel className=" " showStatus={false} showThumbs={false} autoPlay>
        <div>
          <img className="carousel" src={slide1} />
          <div className="slidercontent">
            <div className="flex items-center">
              <div className="bg-[#293f75] h-1 w-12"></div>
              <span className="text-white ml-2">Experienced consultant</span>
            </div>
            <p className="text-left text-6xl sliderinfo text-white font-bold">
              The Fastest Way
            </p>
            <span className="text-8xl text-[#293f75] font-bold items-start">
              to Achive success
            </span>
            <br />
            <div className="text-left mt-10">
              {" "}
              <button className="bg-[#293f75] font-bold rounded-md text-white pt-3 pb-3 pr-7 mr-10 pl-7">
                Our Service
              </button>
              <button className="bg-white font-bold rounded-md text-[#293f75] pt-3 pb-3 pr-7 pl-7">
                {" "}
                <span>
                  <PlayCircleFilledIcon />
                </span>{" "}
                Watch A Presentation
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="carousel" src={slide2} />
          <div className="slidercontent">
            <div className="flex items-center">
              <div className="bg-[#293f75] h-1 w-12"></div>
              <span className="text-white ml-2">
                A New Respective of Investment{" "}
              </span>
            </div>
            <p className="text-left text-6xl sliderinfo text-white font-bold">
              Building Your
            </p>
            <span className="text-8xl text-[#293f75] font-bold items-start">
              Success Foundation
            </span>
            <br />
            <div className="text-left mt-10">
              {" "}
              <button className="bg-[#293f75] font-bold rounded-md text-white pt-3 pb-3 pr-7 mr-10 pl-7">
                Our Service
              </button>
              <button className="bg-white font-bold rounded-md text-[#293f75] pt-3 pb-3 pr-7 pl-7">
                {" "}
                <span>
                  <PlayCircleFilledIcon />
                </span>{" "}
                Watch A Presentation
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="carousel" src={slide3} />
          <div className="slidercontent">
            <div className="flex items-center">
              <div className="bg-[#293f75] h-1 w-12"></div>
              <span className="text-white ml-2">Feel Valued, be reworded</span>
            </div>
            <p className="text-left text-6xl sliderinfo text-white font-bold">
              Exceeding Your
            </p>
            <span className="text-8xl text-[#293f75] font-bold items-start">
              success Expectations
            </span>
            <br />
            <div className="text-left mt-10">
              {" "}
              <button className="bg-[#293f75] font-bold rounded-md text-white pt-3 pb-3 pr-7 mr-10 pl-7">
                Our Service
              </button>
              <button className="bg-white font-bold rounded-md text-[#293f75] pt-3 pb-3 pr-7 pl-7">
                {" "}
                <span>
                  <PlayCircleFilledIcon />
                </span>{" "}
                Watch A Presentation
              </button>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="flex text-white font-bold absolute top-10 left-5 right-5 items-center justify-between w-10/12 m-auto ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <span>Home</span>
          <div class="p-10">
            <div class="dropdown inline-block relative">
              <span class="mr-1">Company</span>

              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Company Information
                  </a>
                </li>
                <li class="">
                  <a
                    class="bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Management
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Leadership
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span className="mr-8 cursor-pointer">Core Values</span>
          <span className="mr-8 cursor-pointer">Social Responsibilty</span>
          <span className="mr-8 cursor-pointer">Client Registration</span>

         <div className="relative">
          <button className="cursor-pointer" onClick={()=>setMenu(!menu)}>
            {
              menu ? <MenuOpenIcon/>
              :
              <> <MenuIcon/></>
            }
           
            
            </button>
          <div className="absolute right-5 top-6">
{
  menu && <>
  <ul data-aos="fade-left" class=" z-0 w-56 text-gray-700 pt-1">
                <li class="">
                  <a
                    onClick={() => setOpen(!open)}
                    class="rounded-b  mt-4 bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Soultions{" "}
                    <span>
                      <ArrowDropDownIcon />
                    </span>
                  </a>
                </li>
                {open && (
                  <>
                    <div className="rounded-b  bg-gray-200  py-2 px-4 block whitespace-no-wrap">
                      <div className=" ">
                        <span className="">Corporate Solutions</span>{" "}
                        <br />
                        <div className="mt-2 font-normal flex flex-col gap-1 cursor-pointer">
                          <span>Consulting</span>
                          <span>Networking</span>

                          <span>Innovation</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="font-bold">Process Outsourcing</span>
                        <div className="mt-2 flex flex-col gap-1 cursor-pointer font-normal">
                          {" "}
                          <span>Social Media Handling</span>
                          <span>Digital Marketing</span>
                          <span>Chat Support</span>
                          <span>Digital Content Creation</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="font-bold">
                          Application Development
                        </span>
                        <br />
                        <div className="mt-2 flex flex-col gap-1 cursor-pointer font-normal">
                          <span>Software</span>
                          <span>Web and mobile application</span>
                          <span>Artificial Intelligence</span>
                          <span>Digital Content Creation</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <li class="">
                  <a
                    onClick={() => setcat(!cat)}
                    class="rounded-t font-bold flex bg-gray-200 hover:bg-[#50dec8] py-2 px-4  whitespace-no-wrap"
                    href="#"
                  >
                    Category Of Business{" "}
                    <span>
                      <ArrowDropDownIcon />
                    </span>
                  </a>
                </li>
                {cat && (
                  <>
                    <div className="flex flex-col gap-1 rounded-b  bg-gray-200  py-2 px-4  whitespace-no-wrap ">
                      <span>Start Up</span>
                      <span>SME</span>
                      <span>Corporate</span>
                    </div>
                  </>
                )}
                <li class="">
                  <a
                    class="font-bold rounded-b  bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Partners
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b font-bold bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Industries
                  </a>
                </li>
                <li class="">
                  <a
                    class="font-bold rounded-b bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Career
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b font-bold bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
  </>
}
          </div>
         </div>

          {/* <div class="p-10">
            <div class="dropdown inline-block relative">
              <span class="mr-1"><MenuIcon/></span>

              <ul class="dropdown-menu absolute hidden w-56 text-gray-700 pt-1">
                <li class="">
                  <a
                    onClick={() => setOpen(!open)}
                    class="rounded-b  mt-4 bg-gray-200 hover:bg-[#50dec8] py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Soultions{" "}
                    <span>
                      <ArrowDropDownIcon />
                    </span>
                  </a>
                </li>
                {open && (
                  <>
                    <div className="rounded-b  bg-gray-200  py-2 px-4 block whitespace-no-wrap">
                      <div className=" ">
                        <span className="">Corporate Solutions</span>{" "}
                        <br />
                        <div className="mt-2 font-normal flex flex-col gap-1 cursor-pointer">
                          <span>Consulting</span>
                          <span>Networking</span>

                          <span>Innovation</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="font-bold">Process Outsourcing</span>
                        <div className="mt-2 flex flex-col gap-1 cursor-pointer font-normal">
                          {" "}
                          <span>Social Media Handling</span>
                          <span>Digital Marketing</span>
                          <span>Chat Support</span>
                          <span>Digital Content Creation</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span className="font-bold">
                          Application Development
                        </span>
                        <br />
                        <div className="mt-2 flex flex-col gap-1 cursor-pointer font-normal">
                          <span>Software</span>
                          <span>Web and mobile application</span>
                          <span>Artificial Intelligence</span>
                          <span>Digital Content Creation</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <li class="">
                  <a
                    onClick={() => setcat(!cat)}
                    class="rounded-t font-bold flex bg-gray-200 hover:bg-[#50dec8] py-2 px-4  whitespace-no-wrap"
                    href="#"
                  >
                    Category Of Business{" "}
                    <span>
                      <ArrowDropDownIcon />
                    </span>
                  </a>
                </li>
                {cat && (
                  <>
                    <div className="flex flex-col gap-1 rounded-b  bg-gray-200  py-2 px-4  whitespace-no-wrap ">
                      <span>Start Up</span>
                      <span>SME</span>
                      <span>Corporate</span>
                    </div>
                  </>
                )}
                <li class="">
                  <a
                    class="font-bold rounded-b  bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Partners
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b font-bold bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Industries
                  </a>
                </li>
                <li class="">
                  <a
                    class="font-bold rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Career
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b font-bold bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-10/12 m-auto flex gap-32 items-center card ">
        <div data-aos="zoom-in" className="w-2/5">
          <div className="flex items-center">
            <div className="bg-[#293F75] w-10 h-1"></div>
            <span>Your Reliable Business Partner</span>
          </div>
          <p className="text-3xl mt-5">Getting your Business Success, simply</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            molestias assumenda odit dolore adipisci distinctio sunt ratione vel
            quisquam voluptatibus!
          </p>
          <button className="bg-[#293f75]  font-bold rounded-md mt-5 text-white pt-3 pb-3 pr-7 pl-7">
            {" "}
            See Our Service
          </button>
        </div>
        <div className="flex gap-20  z-10">
          <div data-aos="fade-right" className="flex flex-col gap-10">
            <div className="h-96 w-96 bg-[#f6f6f6]">
              <div className="flex justify-end pr-10 pt-6">
                <img src={ser1} className="w-24" alt="" />
              </div>
              <div className="flex flex-col gap-5 mt-6 pl-10 pr-10">
                <p className="text-3xl">Performance</p>
                <p className="text-justify">
                  Effective performance management is crucial for achieving
                  organizational goals and maximizing employee potential through
                  ongoing feedback, coaching, and goal-setting.
                </p>
                <span className="cursor-pointer text-[#50dec8] font-bold">
                  Learn More{" "}
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </span>
              </div>
            </div>
            <div className="h-96 w-96 bg-[#f6f6f6]">
              <div className="flex justify-end pr-10 pt-6">
                <img src={ser2} className="w-24" alt="" />
              </div>
              <div className="flex flex-col gap-5 mt-6 pl-10 pr-10">
                <p className="text-3xl">We Innovate</p>
                <p className="text-justify">
                  Innovation is key to staying ahead of the competition. By
                  constantly seeking new ideas and solutions, businesses can
                  innovate and improve
                </p>
                <span className="cursor-pointer text-[#50dec8] font-bold">
                  Learn More{" "}
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-col gap-10">
            <div className="h-96 w-96 bg-[#f6f6f6]">
              <div className="flex justify-end pr-10 pt-6">
                <img src={ser3} className="w-24" alt="" />
              </div>
              <div className="flex flex-col gap-5 mt-6 pl-10 pr-10">
                <p className="text-3xl">Our Approach</p>
                <p className="text-justify">
                  Business we operate in is like an intricate game of chess,
                  where every move counts and you keep score with money.
                </p>
                <span className="cursor-pointer text-[#50dec8] font-bold">
                  Learn More{" "}
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </span>
              </div>
            </div>
            <div className="h-96 w-96 bg-[#f6f6f6]">
              <div className="flex justify-end pr-10 pt-6">
                <img src={ser4} className="w-24" alt="" />
              </div>
              <div className="flex flex-col gap-5 mt-6 pl-10 pr-10">
                <p className="text-3xl">A Full Service</p>
                <p className="text-justify">
                  A full-service approach provides customers with a
                  comprehensive solution, including product delivery,
                  installation, maintenance, and support services.
                </p>
                <span className="cursor-pointer text-[#50dec8] font-bold">
                  Learn More{" "}
                  <span>
                    <ArrowForwardIosIcon />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
