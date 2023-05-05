import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'aos/dist/aos.css';
import Aos from "aos";
import "./custom.css";

// import required modules
import { Pagination } from "swiper";
import StarRateIcon from '@mui/icons-material/StarRate';
const Tesimonial = () => {
    useEffect(() => {
        Aos.init({
          duration:1000
        })
          },[])
    return (
        <div className=" mt-40"> 
    
      <div className="  w-9/12 m-auto ml-48">
       <div className="flex justify-between ">
       <div>
          <div className="flex items-center">
          <div className="bg-[#293F75] w-10 h-1"></div>
          <span className="text-2xl">We Keep Our Promises</span>
          </div>
          <p className="text-[#293F75] text-6xl font-bold">We Listen,</p>
          <p className="text-[#50dec8] text-6xl font-bold">You Prosper</p>
        </div>
        <div className="w-1/4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eum dolorem laudantium aspernatur voluptatum cumque voluptates, sit ex labore! Sapiente magnam inventore adipisci rem possimus harum ipsa aspernatur ullam!
        </div>
       </div>
        <div className="ml-20 mt-20">
        <Swiper
        slidesPerView={4}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="800">
                <img className="rounded-full w-28 pb-3" src="https://avantage.bold-themes.com/financial/wp-content/uploads/sites/3/2019/04/client-02-160x160.jpg" alt="" />
                <span className="text-[#293f75] text-2xl font-bold ">Best Decision ever</span>
                <p className="text-justify mb-2 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit culpa? Facilis molestias totam itaque similique, optio excepturi consequuntur? Quisquam.</p>
                <span className="text-[#50dec8] "><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                <p className="mt-2">Jhon Dei</p>
            </div>
        </SwiperSlide>
        <SwiperSlide><div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1200">
                <img className="rounded-full w-28 pb-3" src="https://avantage.bold-themes.com/financial/wp-content/uploads/sites/3/2019/04/client-03-160x160.jpg" alt="" />
                <span className="text-[#293f75] text-2xl font-bold ">Saved My Business </span>
                <p className="text-justify mb-2 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit culpa? Facilis molestias totam itaque similique, optio excepturi consequuntur? Quisquam.</p>
                <span className="text-[#50dec8] "><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                <p className="mt-2">James</p>
            </div></SwiperSlide>
        <SwiperSlide><div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1600">
                <img className="rounded-full w-28 pb-3" src="https://avantage.bold-themes.com/financial/wp-content/uploads/sites/3/2019/04/client-04-160x160.jpg" alt="" />
                <span className="text-[#293f75] text-2xl font-bold ">The Right Investment </span>
                <p className="text-justify mb-2 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit culpa? Facilis molestias totam itaque similique, optio excepturi consequuntur? Quisquam.</p>
                <span className="text-[#50dec8] "><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                <p className="mt-2">Callum</p>
            </div></SwiperSlide>
        <SwiperSlide><div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img className="rounded-full w-28 pb-3" src="https://avantage.bold-themes.com/financial/wp-content/uploads/sites/3/2019/04/client-06-160x160.jpg" alt="" />
                <span className="text-[#293f75] text-2xl font-bold ">The Best Company </span>
                <p className="text-justify mb-2 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit culpa? Facilis molestias totam itaque similique, optio excepturi consequuntur? Quisquam.</p>
                <span className="text-[#50dec8] "><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                <p className="mt-2">Jacob</p>
            </div></SwiperSlide>
        <SwiperSlide><div>
                <img className="rounded-full w-28 pb-3" src="https://avantage.bold-themes.com/financial/wp-content/uploads/sites/3/2019/04/client-05-160x160.jpg" alt="" />
                <span className="text-[#293f75] text-2xl font-bold ">Best People For me </span>
                <p className="text-justify mb-2 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit culpa? Facilis molestias totam itaque similique, optio excepturi consequuntur? Quisquam.</p>
                <span className="text-[#50dec8] "><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                <p className="mt-2">Jacob</p>
            </div></SwiperSlide>
        <SwiperSlide><div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2400">
                <img className="rounded-full w-28 pb-3" src="https://avantage.bold-themes.com/financial/wp-content/uploads/sites/3/2019/04/client-01-160x160.jpg" alt="" />
                <span className="text-[#293f75] text-2xl font-bold ">Absulitly spot-on </span>
                <p className="text-justify mb-2 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit culpa? Facilis molestias totam itaque similique, optio excepturi consequuntur? Quisquam.</p>
                <span className="text-[#50dec8] "><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                <p className="mt-2">Samantha</p>
            </div></SwiperSlide>
        
      </Swiper>
        </div>
        <hr className="mt-28"/>
        
        <button className="bg-[#293f75] viewmore font-bold rounded-md mt-5 text-white pt-3 pb-3 pr-7 pl-7">
                {" "}
              
               <span className="ml-3"> view All Review</span>
              </button>
      </div> 
    </div>
    );
};

export default Tesimonial;