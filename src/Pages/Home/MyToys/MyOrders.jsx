import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const MyOrders = () => {
  const {user } = useContext(AuthContext)
  const toyDetails = useLoaderData() 
  const {_id, img,category,toyName, name,  price, rating } = toyDetails


  console.log(toyDetails)



  const handleOrders =(event) =>{
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
  const ordersData ={ 
    toyName : toyName,
   name:  customerName,
   email: customerEmail ,
     category: category,
     quantity :quantity,
       rating,
        price ,
        img ,
        details ,
      
    }
  
    console.log(ordersData)
    
    fetch('https://toy-assignment-server-zeta.vercel.app/orders' ,{
      method:'POST',
      headers:{
        'content-type': 'application/json' },
      
      body:JSON.stringify(ordersData)
  })
  .then(res => res.json()) 
  .then(data =>{
     console.log(data)
 
  if(data.insertedId){
    Swal.fire({
      icon: 'success',
      title: 'success',
      text: 'Successfully added your order',
    
    })
  }

  })

   form.reset()

  }

    return (
      <div className="bg-slate-500 p-20  ">
      <h2 className="text-center font-bold text-2xl text-white">Enter your details to get order  :</h2>
  
     <form onSubmit={handleOrders}>
       <div className='flex gap-10 mt-10  '>
       <div className='w-1/2'>
        <div className="form-control mb-2">
         <label className="label">
        <span className="label-text text-xl  text-white">Toy Name</span>
         </label>
        <label className="input-group">
        <input type="text" readOnly defaultValue={toyName}  name="toyName" placeholder="Toy Name" className="input input-bordered w-full text-lg " />
          </label>
          </div>
     <div className="form-control mb-2">
         <label className="label">
        <span className="label-text text-xl  text-white">Your Name</span>
         </label>
        <label className="input-group">
        <input type="text" name="name" defaultValue={name}  placeholder="enter your  name" className="input input-bordered w-full text-lg " />
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
        <input type="text" defaultValue={category} name="category" placeholder="Sub-Category" className="input input-bordered w-full text-lg" />
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
        <input type="number" defaultValue={rating}  name="rating" placeholder="rating" className="input input-bordered w-full text-lg" />
          </label>
          </div>
      <div className="form-control mb-2">               
         <label className="label">
        <span className="label-text text-xl  text-white">Price</span>
         </label>
        <label className="input-group">
        <input type="number" readOnly defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full text-lg" />
          </label>
          </div>
     
      
      <div className="form-control mb-2">
         <label className="label">
        <span className="label-text text-xl  text-white">Image</span>
         </label>
        <label className="input-group">
        <input type="url" defaultValue={img} readOnly name="img" placeholder="image url" className="input input-bordered w-full mb-3 text-lg" />
          </label>
          </div>
  
      </div>
      </div>
      
      <div className="form-control mb-6 w-full text-xl  ">
         <label className="label">
        <span className="label-text text-xl  text-white">Details</span>
         </label>
        <label className="input-group">
           <textarea name="details" id="" cols="30" placeholder='Enter your  details'  rows="5" className="form-control w-full px-3 pt-2  "></textarea>
          </label>
          </div>
  
  
          <button className="bg-neutral-800	text-white text-2xl w-full mx-auto   py-4 rounded mb-3"> 
                <input  type="submit" value="Confirm" />
          </button>
         
   </form>
  
   </div>
    );
};

export default MyOrders;