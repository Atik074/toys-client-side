import React, { useContext } from 'react';
import { BsStarFill,BsStarHalf } from 'react-icons/bs';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';


const SingleToy = ({toy}) => {
    const {user} = useContext(AuthContext)
    const {_id ,toyName, rating,price, img} = toy 
    console.log(toy)
     
    const handleById =  id =>{
        console.log(id)
       if(!user){
        Swal.fire(
            { title: 'You have to login frist!', })
           
      }
    }
    
   


    return (
        <div className='px-10'>
     
   <div className="card w-96 glass">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy name : {toyName}</h2>
<p className='text-xl'>Ratings : {rating}
   <Rating className='ml-1'
     placeholderRating={rating}
    emptySymbol={<BsStarHalf/>}
    placeholderSymbol={<BsStarFill/>}
    fullSymbol={<BsStarFill/>}
   />
</p>
        
      <p className='text-xl'>Price : {price}</p>
    <div className="card-actions">
    <Link to={`/alltoys/${_id}`}>
      <button onClick={()=>handleById(_id)} className="btn btn-primary text-white capitalize text-xl">View Details</button>
          </Link>
    
    </div>
  </div>
</div>


        </div>
    );
};

export default SingleToy;