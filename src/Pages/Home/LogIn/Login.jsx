import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const {user , SignInUser} = useContext(AuthContext)
     const [error , setError] = useState('')
     const location = useLocation()
     const navigate = useNavigate()

     const from = location.state?.from?.pathname ||  '/'
 
   const handleLogin =(event)=>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value 
    const password = form.password.value 
    console.log(email , password) 
    
    SignInUser(email,password)
    .then(result =>{
     const user = result.user 
      navigate(from , {replace:true})
     if(user){
            alert('successfull login')
          }
       
    })
    .catch(error =>{
       const err = error.message
       setError(err)
         console.log(err)
    })
  
  }



    return (
        <div className='bg-slate-400 p-20' >

     <form onSubmit={handleLogin} className='w-1/3 mx-auto   rounded'>
     <div className="form-control">
       <label className="label">
      <span className="label-text text-[20px] ">Your Email</span>
       </label>
      <label className="input-group">
      <input type="email" name="email" placeholder="type your email" className="input input-bordered w-96 mb-3" />
        </label>
        </div>
        <div className="form-control mb-5">
       <label className="label">
      <span className="label-text text-[20px]">Your password</span>
       </label>
      <label className="input-group">
      <input type="password" name="password" placeholder="type your password" className="input input-bordered w-96" />
        </label>
        </div>

       <button >
           <input className="btn btn-neutral text-xl px-16 mb-4"  type="submit" value="Login" />
        </button>  

        
          <p className="mb-1 text-[19px]"> <i> Not a member ? please </i>
          <Link className="hover:underline text-xl font-bold text-red-700 " to='/signUp'> SignUp</Link>
           </p>

           {
             error ? <p className='font-bold text-lg'>{error}</p> :
             <>  </>
          }   

        </form>

        <div>
          <SocialLogin></SocialLogin>
        </div>
       
     
       

        </div>
    );
};

export default Login;