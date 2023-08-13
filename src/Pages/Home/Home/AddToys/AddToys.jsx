import React from 'react';
import Swal from 'sweetalert2';

const AddToys = () => {

    const handleAddToys =(event) =>{
        event.preventDefault()
      const form = event.target 
      const name = form.name.value 
      const sellerName = form.sellerName.value 
      const sellerEmail = form.sellerEmail.value 
      const category = form.category.value 
      const quantity = form.quantity.value 
      const rating = form.rating.value 
      const price = form.price.value 
       const img = form.img.value 
       const details = form.details.value
    const toyDetails ={
      toyName :  name ,
      name: sellerName,
      email: sellerEmail ,
        category: category,
        quantity :quantity,
          rating,
           price ,
           img ,
           details ,
        
    
    }
      console.log(toyDetails)
      
      fetch('https://toy-assignment-server-zeta.vercel.app/addToys' ,{
        method:'POST',
        headers:{
          'content-type': 'application/json' },
        
        body:JSON.stringify(toyDetails)
    })
    .then(res => res.json()) 
    .then(data =>{
    console.log(data)
   
    if(data.insertedId){
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: 'Successfully added',
      
      })
    }


    })
     
    }



    return (
        <div>
    <div className="bg-slate-500 p-20 rounded">
    <h2 className="text-center font-bold text-2xl text-white">Please add a new toy details :</h2>

   <form onSubmit={handleAddToys}>
     <div className='flex gap-10 mt-10'>
     <div className='w-1/2'>
      <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Toy Name</span>
       </label>
      <label className="input-group">
      <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full text-lg " />
        </label>
        </div>
   <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Seller Name</span>
       </label>
      <label className="input-group">
      <input type="text" name="sellerName" placeholder="Seller name" className="input input-bordered w-full text-lg " />
        </label>
        </div>
   <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Seller email</span>
       </label>
      <label className="input-group">
      <input type="email" name="sellerEmail" placeholder="Seller email" className="input input-bordered w-full text-lg " />
        </label>
        </div>

  <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Sub-Category</span>
       </label>
      <label className="input-group">
      <input type="text" name="category" placeholder="Sub-Category" className="input input-bordered w-full text-lg" />
        </label>
        </div>   
 
        
         </div>

  <div className='w-1/2'>
    <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Available-Quantity </span>
       </label>
      <label className="input-group">
      <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full text-lg" />
        </label>
        </div>
        <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Rating</span>
       </label>
      <label className="input-group">
      <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full text-lg" />
        </label>
        </div>
    <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Price</span>
       </label>
      <label className="input-group">
      <input type="number" name="price" placeholder="Price" className="input input-bordered w-full text-lg" />
        </label>
        </div>
   
    
    <div className="form-control mb-2">
       <label className="label">
      <span className="label-text text-xl  text-white">Image</span>
       </label>
      <label className="input-group">
      <input type="url" name="img" placeholder="image url" className="input input-bordered w-full mb-3 text-lg" />
        </label>
        </div>

    </div>
    </div>
    
    <div className="form-control mb-6 w-full text-xl  ">
       <label className="label">
      <span className="label-text text-xl  text-white">details</span>
       </label>
      <label className="input-group">
         <textarea name="details" id="" cols="30" rows="5"className="form-control w-full px-3  "></textarea>
        </label>
        </div>


        <button className="bg-neutral-800	text-white text-2xl w-full mx-auto   py-4 rounded mb-3"> 
              <input  type="submit" value="Submit" />
        </button>
       
 </form>

 </div>
        </div>
    );
};

export default AddToys;