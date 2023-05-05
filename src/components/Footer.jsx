import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
    return (
        <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
  <div class="container mx-auto px-4">
    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 class="text-xl font-bold mb-6">About Us </h5>
        <p className='text-justify'> Atque quidem pariatur nihil quasi necessitatibus tenetur impedit ratione, deserunt aperiam ullam hic asperiores consectetur doloribus eos explicabo inventore sed, dicta veniam? Quaerat quas reprehenderit assumenda.</p>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 class="text-xl font-bold mb-6">Useful Links</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class=" hover:text-[#50dec8]">Media</a>
          </li>
          <li class="mb-2">
            <a href="#" class=" hover:text-[#50dec8]">List Of others business</a>
          </li>
          <li class="mb-2">
            <a href="#" class=" hover:text-[#50dec8]">payonline</a>
          </li>
          <li class="mb-2">
            <a href="#" class=" hover:text-[#50dec8]">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 class="text-xl font-bold mb-6">Get In Touch</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class=" hover:text-[#50dec8]">Corporate Office</a>
          </li>
          <li class="mb-2">
            <a href="#" class="  hover:text-[#50dec8]">General Helpline</a>
          </li>
         
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 class="text-xl font-bold mb-6">Help</h5>
        <ul class="list-none footer-links">
         
          <li class="mb-2">
            <a href="#" class=" hover:text-[#50dec8]">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div class="flex sm:justify-center xl:justify-start gap-6 text-xl text-[#50dec8]">
          <a href="" class="w-8 h-8  ">
            <FacebookIcon/>
          </a>
          <a href="" class="w-8 h-8  ">
            <TwitterIcon/>
          </a>
          <a href="" class="w-8 h-8  ">
           <PinterestIcon/>
          </a>
        </div>
      </div>
    </div>

    <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t ">
     <div className='m-auto text-center'>
     <span>Copyright 2023</span><br />
     <span>Santeach technology all right reserved </span>
     </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;