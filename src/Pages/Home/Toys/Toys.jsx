import React, { useEffect, useState } from 'react';
import SingleToy from '../SingleToy/SingleToy';

const Toys = () => {
    const [allToys , setAllToys] = useState([]) 



  useEffect(()=>{
  fetch('https://toy-assignment-server-zeta.vercel.app/alltoys')
  .then(res=>res.json()) 
  .then(data =>{
    const policeCar = data.filter(item => item.category == 'Pollice Car')
    setAllToys(policeCar.slice(0,3))

  })
   },[])


// police car by category

   const policeItems = () =>{
    fetch('https://toy-assignment-server-zeta.vercel.app/alltoys')
     .then(res=>res.json()) 
     .then(data =>{
         const policeCar = data.filter(item => item.category == 'Pollice Car')
         setAllToys(policeCar.slice(0,3))
      })
   }


// truck car by category

   const truckItems = () =>{
      fetch('https://toy-assignment-server-zeta.vercel.app/alltoys')
       .then(res=>res.json()) 
       .then(data =>{
           const truckItems = data.filter(item => item.category == 'Truck Car')
           setAllToys(truckItems.slice(0,3))
        })
  }

// sports car by category

   const sportsItems = () =>{
      fetch('https://toy-assignment-server-zeta.vercel.app/alltoys')
       .then(res=>res.json()) 
       .then(data =>{
           const sportsCar= data.filter(item => item.category == 'Sports Car')
           setAllToys(sportsCar.slice(0,3))
        })

    }
 





    return (
         <div className='my-32'> 
       
        <div className='text-center mb-10'>
        <h1 className='text-3xl mb-2 font-medium'>Our official toy gallery</h1>
        <p className='text-[19px] mb-8'>design by our category</p>

        <button onClick={()=>policeItems()} className="btn  btn-primary hover:bg-cyan-600 hover:border-none border-0 text-white font-bold  px-8 rounded-full">Police Car</button>

         <button onClick={()=>sportsItems()} className="btn mx-6  btn-primary hover:bg-cyan-600 hover:border-none border-0 text-white font-bold  px-8 rounded-full">Sports Car</button>

        <button onClick={()=>truckItems()}  className="btn   btn-primary hover:bg-cyan-600 hover:border-none border-0 text-white font-bold  px-8 rounded-full">Truck Car</button>

         </div>
        

        <div className='grid grid-cols-3'>
            {
               allToys.map(toy =><SingleToy
               key={toy._id} 
               toy={toy}
               
               ></SingleToy>)
            }
        </div>

        </div>
    );
};

export default Toys;