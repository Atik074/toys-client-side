import React from 'react';


const Banner = () => {
    return (
<div className=''>



   <div className="carousel w-full h-[600px]">

    <div id="slide1" className="carousel-item relative w-full">
    <img src='https://rb.gy/f8rjl' className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

    <div className="absolute bottom-0 text-white">
     <p className='p-10 text-xl w-[80%] mx-auto '>The most popular features — leather seats, sunroof/moonroof and heated seats — are somewhat expected because they most sought after and often optional. The backup camera in fourth place is an important safety feature, and here a fun fact: All cars manufactured after May 2018 are federally required to come with a standard backup camera; this list, however, includes searches in all new or used cars, which can stretch well</p>
   </div>
  </div> 


  <div id="slide2" className="carousel-item relative w-full ">
     <img src='https://rb.gy/0tsp5' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>

    <div className="absolute bottom-0 text-white">
     <p className='p-10 text-xl w-[80%] mx-auto'>It is been interesting over the past few years to drive vehicles  that simply did not make them just a few years ago, and this is the latest one: the 2023 Rivian R1T. It is a fully electric pickup truck from a totally new automaker, designed in the U.S. and built in Illinois. It is also available in SUV form as the R1S. This truck has been out for more than a year now, but this was my first chance to get behind the wheel of the offering</p>
   </div>



  </div> 


  <div id="slide3" className="carousel-item relative w-full">
  <img src='https://rb.gy/zwm5y' className="w-full"/>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>

    <div className="absolute bottom-0 text-white">
     <p className='p-10 text-xl w-[80%] mx-auto'>It says the new Land Cruiser will be available in three trim levels: the base 1958, mid-level Land Cruiser and range-topping First Edition; the latter will be limited to 5,000 units. All versions are powered by  2.4-liter i-Force Max hybrid powertrain, which makes a system total of 326 horsepower and 465 pounds-feet of torque. All versions also come standard with an eight-speed automatic transmission and full-time four-wheel drive.</p>
   </div>


  </div> 


  <div id="slide4" className="carousel-item relative w-full">
      <img src='https://rb.gy/2gi7v' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>

    <div className="absolute bottom-0 text-white">
     <p className='p-10 text-xl w-[80%] mx-auto'>Now, a higher-output hardwired Level 2 unit like the one we used for this test is overkill for the Grand Cherokee 4xe and other PHEVs that ca not take advantage of the power and able to offer. But one that can plug into a 240-volt outlet — which you may already have in your garage — and operate at around 30 amps could mean the difference between your Grand Cherokee 4xe being fully charged.</p>
   </div>
  </div>
</div>




    </div>
    );
};

export default Banner;