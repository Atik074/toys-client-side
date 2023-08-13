import React from 'react';
import AllToysTable from './AllToysTable';
import { useState } from 'react';
import { useEffect } from 'react';

const AllToys = () => {
    const [allToys , setAllToys] = useState([])
    const [searchItem , setSearchItem] = useState('')

    useEffect(()=>{
        fetch('https://toy-assignment-server-zeta.vercel.app/alltoys')
        .then(res =>res.json())
        .then(data =>{
           setAllToys(data) 
           console.log(data)
         })
    },[])

    

// implement search 
    const handleInputChange = (event) => {
      setSearchItem(event.target.value);
    };
    
    const filteredData = allToys.filter((item) =>
      item.toyName.toLowerCase().includes(searchItem.toLowerCase())
    );
  
   


   

    return (
    <div className='p-10  mt-10 mb-28'>  
      <h1 className='text-center text-[25px]'>Our all toys displayed here :</h1>
  
  <div className=''>
      <input className='border rounded border-gray-600 p-2 w-60 mb-10 '
        type="text"
        placeholder="Search by toy name"
        value={searchItem}
        onChange={handleInputChange}
      />
    </div>


<div className="overflow-x-auto">
  <table className="table">
     <thead>
      <tr className='text-xl fontbold'>
        <th>Picture</th>
        <th>Seller Name </th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available quantity</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
         {
          filteredData.map(toy =><AllToysTable
            key={toy._id}
            toy ={toy}
           ></AllToysTable>)
           }



   </tbody>  
         
  </table>



</div>


        </div>
    );
};

export default AllToys;