import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinFill ,RiPencilFill, } from 'react-icons/ri';



const MyOrdersRow = ({order,handleDeleteOrder }) => {
    const {_id, img,toyName ,category,name,date,quantity, price, rating } = order 
   console.log(order.name)




    return(
        <tr> 
         <td>
          <div className="flex items-center">
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
           <p>{category}</p>
        </td>
        <td className='text-lg'>
          <p className='ml-3'>{quantity}</p>

        </td>

        <td className='text-lg'>
           <p>{price}</p>
         </td>

      <th>
      <Link to={`/updateOrder/${_id}`}>
    <button  className="text-[40px] group relative ">
         <RiPencilFill className='rounded bg-red-500 text-white p-2'/>
      <span className="absolute left-[40px] top-0 text-lg font-normal opacity-0 group-hover:opacity-100"> update </span>
    </button>
      </Link>
         
     </th>

        <th>
        <Link to=''> 
           <button onClick={()=>handleDeleteOrder(_id)} className='text-[40px] '>
          <RiDeleteBinFill className='rounded bg-red-500 text-white p-2'/>
            </button>
         </Link>
        </th>

      </tr>

  )

};

export default MyOrdersRow;