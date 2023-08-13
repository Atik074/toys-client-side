import React from 'react';
import logo from '../assets/2381381.png'
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='p-20 w-full h-screen text-center' style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(184,55,138,1) 35%, rgba(0,212,255,1) 100%)'}}>
            <h1 className='text-4xl  text-cyan-400 font-bold'>OH NO !! <span className='text-yellow-300'>Page Not Found</span></h1>


            <div className='flex items-center w-1/2 mx-auto mt-20'>
                <h1 className='text-9xl  mx-10 text-green-500 font-extrabold'>4</h1>
                  <div className=''>
                    <img src={logo} alt="" />
                  </div>
                <h1 className='text-9xl text-red-700  mx-10 font-extrabold'>4</h1>
            </div>

            <Link to='/'> 
               <button  className='btn mt-10 btn-grad text-xl'>Go Back</button>
               
            </Link>
              
        </div>
    );
};

export default Error;