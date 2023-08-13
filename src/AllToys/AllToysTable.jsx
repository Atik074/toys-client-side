import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AllToysTable = ({toy}) => {
    const {user} = useContext(AuthContext)
    const {_id , img,category, name, toyName, price, rating, quantity} = toy

    const handleById =  id =>{
        console.log(id)
       if(!user){
        Swal.fire(
            { title: 'You have to login frist!', })
           
      }
    }



    return (
        <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img}  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>

           

          </div>
        </td>
        <td className='text-lg'>
        <p>{name}</p>
        </td>
        <td className='text-lg'>
        <p>{toyName}</p>
        </td>

        <td className='text-lg'>
        <p> {category}</p>
        </td>
        <td className='text-lg'>
        <p>{price}</p>
        </td>
        <td className='text-lg'>
        <p className='ml-8'>{quantity}</p>
        </td>

        <th>
        <Link to={`/alltoys/${_id}`}> 
           <button onClick={()=>handleById(_id)} className="btn  hover:btn-neutral">Details</button>
         </Link>
        </th>

      </tr>

    );
};

export default AllToysTable;