import React, { useContext } from 'react';
import logo from '../../../assets/images.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';




const Navbar = () => {
    const {user , logOut} = useContext(AuthContext) 
   

    const handleLogOut = () =>{
       logOut()
       .then(result =>{
          const user = result.user 
          console.log(user)
         
        
      })
     .catch(error=>{
     console.log(error)
        
    })

      }
      



    return (
<div>   
   <div className="navbar  bg-[#0097e6] px-10 ">
    <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
         <li><Link>Home</Link></li>  
        <li><Link to='/alltoys'>All_Toys</Link></li>
        <li><Link>My_Toys</Link></li>
        <li><Link>Add_A_Toys</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
      </ul>
 </div>

     <div className="avatar">
    <div className=" w-[70px] rounded-full">
    <img src={logo}  />
    </div>    
   </div>
<div>
     <h1 className='text-3xl font-extrabold ml-2 text-white'>ToyCars</h1>
 </div>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-[22px] px-1 text-white font-semibold">
     
           <Link to='/' className='mx-7'>Home</Link>
           <Link to='/alltoys' >All-Toys</Link>
           <Link to='/blogs' className='mx-7'>Blogs</Link> 
    </ul>

 </div>
    <div className="navbar-end">

        { user && user.email ? 
      
        <div className='flex items-center'>
          <div className='text-[22px] mr-6 text-white font-semibold'>
            <Link to='/addToys' className='mr-8'>Add-Toys</Link>
            <Link to='/myOrders'>My-Toys</Link> 
          </div> 
        
     <div>
        { user?.photoURL ?
          <button onClick={handleLogOut}>
            <img className='w-14 rounded-[50%]'  src={user.photoURL} alt="Profile" /> 
            </button>  :
            
            <button onClick={handleLogOut} className="btn  border-2 border-white px-8 capitalize text-red-500 font-semibold bg-[#1e272e]  text-xl ">Logout</ button>
            
          
             }
      </div>
     </div>

        : 
        <div>
        <Link to='/login'>
        <button className="btn  border-2 border-white px-8 capitalize text-red-500 font-semibold bg-[#1e272e]  text-xl ">Login</button>
        </Link>
      </div>
        }
        



        
     </div>
</div>
            
 </div>
    );
};

export default Navbar;