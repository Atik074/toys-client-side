import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateOrder = () => {
    const {user}  = useContext(AuthContext)
  const orderDetails = useLoaderData()
  const {_id , name,toyName ,quantity, img , price ,rating, details , category} = orderDetails
    console.log(orderDetails)
 


// update order 
  const handleUpdateOrder =(event) =>{
        event.preventDefault()
      const form = event.target 
      const toyName = form.toyName.value 
      const  customerName = form.name.value 
      const customerEmail = form.email.value 
      const category = form.category.value 
      const quantity = form.quantity.value 
      const rating = form.rating.value 
      const price = form.price.value 
       const img = form.img.value 
       const details = form.details.value
    const updateOrder ={ 
      toyName : toyName,
      name:customerName,
     email: customerEmail ,
       category: category,
       quantity :quantity,
          price ,
          img ,
          details ,
          rating
      }
    
      console.log(updateOrder)
      
      fetch(`https://toy-assignment-server-zeta.vercel.app/orders/${_id}` ,{
        method:'PUT',
        headers:{
          'content-type': 'application/json' },
        
        body:JSON.stringify(updateOrder)
    })
    .then(res => res.json()) 
    .then(data =>{
       console.log(data)
   
    if(data.modifiedCount > 0){
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: 'successfully update your order',
      
      })
    }
  
  
    })
        
    }



    return (
        <div className="bg-zinc-800 p-20 m-10 rounded">
        <h2 className="text-center font-bold text-2xl text-white">Update your information to get order  :</h2>
    
       <form onSubmit={handleUpdateOrder}>
         <div className='flex gap-10 mt-10  '>
         <div className='w-1/2'>
          <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Toy Name</span>
           </label>
          <label className="input-group">
          <input type="text" readOnly defaultValue={toyName}   name="toyName" placeholder="Toy Name" className="input input-bordered w-full text-lg " />
            </label>
            </div>
       <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Your Name</span>
           </label>
          <label className="input-group">
          <input type="text" name="name" readOnly defaultValue={name}   placeholder="enter your  name" className="input input-bordered w-full text-lg " />
            </label>
            </div>
       <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Your Email </span>
           </label>
          <label className="input-group">
          <input type="text" name="email" defaultValue={user?.email} placeholder=" email" className="input input-bordered w-full text-lg " />
            </label>
            </div>
    
      <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Sub-Category</span>
           </label>
          <label className="input-group">
          <input type="text" readOnly defaultValue={category}  name="category" placeholder="Sub-Category" className="input input-bordered w-full text-lg" />
            </label>
            </div>   
     
            
             </div>
    
      <div className='w-1/2'>
        <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Available-Quantity </span>
           </label>
          <label className="input-group">
          <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full text-lg" />
            </label>
            </div>
            <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Rating</span>
           </label>
          <label className="input-group">
          <input type="number" readOnly defaultValue={rating}  name="rating" placeholder="rating" className="input input-bordered w-full text-lg" />
            </label>
            </div>
        <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Price</span>
           </label>
          <label className="input-group">
          <input type="number"  defaultValue={'$'} name="price" placeholder="Price" className="input input-bordered w-full text-lg" />
            </label>
            </div>
       
        
        <div className="form-control mb-2">
           <label className="label">
          <span className="label-text text-xl  text-white">Image</span>
           </label>
          <label className="input-group">
          <input type="url" defaultValue={img}   name="img" placeholder="image url" className="input input-bordered w-full mb-3 text-lg" />
            </label>
            </div>
    
        </div>
        </div>
        
        <div className="form-control mb-6 w-full text-xl  ">
           <label className="label">
          <span className="label-text text-xl  text-white">Details</span>
           </label>
          <label className="input-group">
             <textarea name="details" id="" cols="30" placeholder='Enter details'  rows="5" className="form-control w-full px-3 pt-2  "></textarea>
            </label>
            </div>
    
    
            <button className="bg-black 	text-white text-2xl w-full mx-auto   py-[13px] rounded mb-3"> 
                  <input  type="submit" value="update" />
            </button>
           
     </form>
    
     </div>
    );
};

export default UpdateOrder;