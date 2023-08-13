import React from 'react';
import logo from '../../../assets/images.png'
import {FaFacebookF, FaInstagram,FaLinkedinIn ,FaGithub} from 'react-icons/fa';





const Footer = () => {
    return (
      <div className='bg-black relative pb-3'>  
      <footer className="footer p-10  items-center    text-white">
      <div className=''>
        <img src={logo} className='w-1/2 rounded mb-4' alt="" />
        <h1 className='text-3xl font-extrabold ml-2 text-cyan-500'>ToyCars</h1>
      </div> 
      <div className='font-serif'>
        <span className="text-cyan-500 text-2xl font-bold underline mb-3">Our Services</span> 
        <a className="link link-hover text-[19px] mb-1 ">Sports  Car</a> 
        <a className="link link-hover text-[19px] mb-1 ">Truck Car</a> 
        <a className="link link-hover text-[19px] mb-1 ">Pollice Car</a> 
        <a className="link link-hover text-[19px] mb-1 ">Mini Fire Car</a>
      </div> 

      <div className='font-serif'>
      <span className="text-cyan-500   text-2xl font-bold underline mb-3">More information</span> 
        <a className="link link-hover text-[19px] mb-1  ">About us</a> 
        <a className="link link-hover text-[19px] mb-1  ">Contact</a> 
        <a className="link link-hover text-[19px] mb-1 ">Support</a> 
        <a className="link link-hover text-[19px] mb-1 ">Terms of Use</a>
      </div> 
      <div className='font-serif'>
      <span className="text-cyan-500   text-2xl font-bold underline mb-3">Our Address</span> 
      <a className="link no-underline	 text-[19px] mb-1  ">Head office :
       <span className='text-orange-500 hover:underline'> Bangalore , India</span>
      </a> 
      <a className="link no-underline	 text-[19px] mb-1 ">Street Name : 
        <span className='text-orange-500 hover:underline'> #964 Main street</span>  
        </a>
        <a className="link no-underline	 text-[19px] mb-1  ">Phone Number :
        <span className='text-orange-500 hover:underline'> (55)+7647965</span>
        </a> 
        <a className="link no-underline	 text-[19px] mb-1 ">Postal Code : 
        <span className='text-orange-500 hover:underline'> 4587</span>

        </a> 
     
      </div> 
       <hr className="w-[1220px]  mb-4 absolute top-48 left-7 right-8 h-1 mx-auto my-4 bg-orange-700 border-0 rounded md:my-10 dark:bg-gray-700"/>
    </footer>
   
 

    <div className='flex justify-around'>
    <p className='text-white'>@Copyright: All rights reserved by <span className='text-orange-500'>ATIKUR RAHMAN</span></p>
      <div className='flex'>
        <p className='mx-3 w-10 h-10 text-[26px]   rounded-full border text-white'>
          <FaFacebookF className='mt-[6px] ml-[6px] hover:text-blue-600' ></FaFacebookF></p>

        <p className='mx-3 w-10 h-10 text-[26px] rounded-full border border-white text-white '><FaInstagram className='mt-[6px] ml-[6px]  hover:text-purple-500' ></FaInstagram></p>

        <p className='mx-3 w-10 h-10 text-[26px]     rounded-full border text-white'><FaLinkedinIn className='mt-2 ml-[6px] hover:text-sky-500 '></FaLinkedinIn></p>

       <p className='mx-3 w-10 h-10 text-[26px]      border rounded-full text-white'><FaGithub  className='mt-2 ml-[6px] hover:text-green-600 '></FaGithub> </p>
       
      </div>
       
    </div>

    </div>
    );
};

export default Footer;