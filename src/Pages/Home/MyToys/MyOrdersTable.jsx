import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyOrdersRow from './MyOrdersRow';
import Swal from 'sweetalert2';

const MyOrdersTable = () => {
    const {user} = useContext(AuthContext) 
    const [orders , setOrder] = useState([])
    console.log(user)


    const url = `https://toy-assignment-server-zeta.vercel.app/orders?email=${user?.email}` 
   

    useEffect(()=>{
         fetch(url)
         .then(res=>res.json()) 
         .then(data =>{
            console.log(data)
             setOrder(data)
            })
   } ,[])


// delete order data

   const handleDeleteOrder = id =>{
  console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    
    .then((result) => {
      if (result.isConfirmed) {
         
        fetch(`https://toy-assignment-server-zeta.vercel.app/orders/${id}` ,{
              method: 'DELETE',
           headers:{
                 'content-type' : 'application/json' }
      } )
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
       if(data.deletedCount == 1){
           Swal.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success' )

             const remaining = orders.filter(order=> order._id !== id)
              setOrder(remaining)
            
            
            }
  } ) 
}
  })
}


    return (
        <div className='p-10 mt-10'>
    <div className="overflow-x-auto">
  <table className="table">
     <thead>
      <tr className='text-xl fontbold'>
        <th>Picture</th>
        <th>Customer Name </th>
        <th>Toy Name</th>
        <th>Sub-category</th>
       <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
         {
            orders.map(order =><MyOrdersRow
              key={order._id}
              order={order}
              handleDeleteOrder={handleDeleteOrder}
    
            ></MyOrdersRow>)
         }
          



   </tbody>  
         
  </table>
</div>

           


        </div>
    )
};

export default MyOrdersTable;