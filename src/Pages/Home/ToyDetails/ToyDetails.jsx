import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsStarFill,BsStarHalf } from 'react-icons/bs';
import Rating from 'react-rating';

const ToyDetails = () => {
    const toyDeails = useLoaderData()
     const {_id,img,category, name, toyName, email, price, rating, quantity, details } = toyDeails
    console.log(toyDeails)
    return (
        <div>
        
    <div className="hero min-h-screen bg-slate-500 text-white">
  <div className="hero-content  p-10 rounded flex-col lg:flex-row gap-x-12  w-full">
    <img src={img} className="rounded-lg mx-w-sm" />
    <div>
        
    <div className=''>
      <h2 className='text-xl  mb-2'>Toy Name  : <span className='text-lg'>{toyName}</span></h2>



      <p className='text-xl mb-1'>Seller Name : <span className='text-lg'>{name} </span></p>

      <p className='text-xl mb-1'>Seller Email : <span className='text-lg'>{email}</span></p>

      <p className='text-xl mb-1'> Quantity : <span className='text-lg'>{quantity}</span> </p>

       <p className='text-xl mb-1'>Price : <span className='text-lg'>{price}</span> </p>

       <p className='text-xl mb-1'> Ratings : <span className='text-lg'>{rating}
      
    <Rating className='ml-1 mb-2'
     placeholderRating={rating}
    emptySymbol={<BsStarHalf/>}
    placeholderSymbol={<BsStarFill/>}
    fullSymbol={<BsStarFill/>}
   />
    </span>
</p>
<p className='text-xl  mb-5'>Deatils : <span className='text-[18px]'>{details}</span></p>


</div>


 <Link to={`/orders/${_id}`}>
    <button className="btn btn-secondary  capitalize text-xl ">Order Now</button>
 </Link>
    </div>
  

  </div>
</div>


        
        </div>
    );
};

export default ToyDetails;