import React from 'react';
import './photoAlbum.css'

const PhotoAlbum = () => {
    return (
        <div className='my-32'>
          <h1 className='text-3xl  text-center mb-8'>Our image gallery</h1>
           <div className='  w-[80%] mx-auto'>
         
                <div className='photo grid grid-cols-4 gap-4'>
                    <img src='https://images.pexels.com/photos/325680/pexels-photo-325680.jpeg?auto=compress&cs=tinysrgb&w=600'   alt="" className='' />
                   <img src="https://images.pexels.com/photos/163546/radpanzer-model-military-vehicle-163546.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                   <img src='https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                   <img src="https://images.pexels.com/photos/242200/pexels-photo-242200.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='picture' />
              <img src="https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <img src="https://images.pexels.com/photos/7885181/pexels-photo-7885181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <img src="https://images.pexels.com/photos/10387796/pexels-photo-10387796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-1/2' alt="" />
              <img src="https://p0.pxfuel.com/preview/725/69/304/crafts-hobby-miniature-cars-royalty-free-thumbnail.jpg" className='w-1/2' alt="" />

                </div>


            </div>
          
          
        </div>
    );
};

export default PhotoAlbum;