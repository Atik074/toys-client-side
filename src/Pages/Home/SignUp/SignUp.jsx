import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
  const {signUpUser} = useContext(AuthContext) 
  const [error , setError] = useState('')
  

  const handleSignUp = (event) =>{
      event.preventDefault() 
      const form = event.target 
       const name = form.name.value 
       const email = form.email.value 
       const password = form.password.value 
       const photo = form.photo.value 
       console.log(name ,email, password , photo)

       signUpUser(email , password )
       .then(result =>{
          const user = result.user 
      })
      .catch(error =>{
         const err = error.message 
         console.log(err)
         setError(err)

      })
  
  }

    return (
      <div className="bg-slate-400 p-20">
      <h2 className="text-center font-semibold text-2xl">Please sign up here :</h2>
  
     <form onSubmit={handleSignUp} className="w-1/2 mx-auto">
     <div className="form-control mb-2">
         <label className="label">
        <span className="label-text text-[20px] ">Your  Name</span>
         </label>
        <label className="input-group">
        <input type="text" name="name" placeholder="enter your name" className="input input-bordered w-full text-lg " />
          </label>
          </div>
     <div className="form-control mb-2">
         <label className="label">
        <span className="label-text text-[20px] ">Your  email</span>
         </label>
        <label className="input-group">
        <input type="email" name="email" placeholder="enter your email" className="input input-bordered w-full text-lg" />
          </label>
          </div>
     <div className="form-control mb-2">
         <label className="label">
        <span className="label-text text-[20px]">Password</span>
         </label>
        <label className="input-group">
        <input type="password" name="password" placeholder="enter your password" className="input input-bordered text-lg w-full mb-3" />
          </label>
          </div>

          <div className="form-control mb-2">
         <label className="label">
        <span className="label-text text-[20px]">photo url</span>
         </label>
        <label className="input-group">
        <input type="url"  name="photo" placeholder="photo url" className="input input-bordered text-lg w-full mb-6" />
          </label>
          </div>

   <button className="bg-neutral-800	text-white text-2xl  px-10 py-3 rounded mb-7 w-full "> 
   <input type="submit" value="SignUp" />
          </button>

          <p className="text-[19px] "> <i> Have an account ? please </i>
          <Link className="hover:underline text-xl font-bold text-red-700" to='/login'>Login</Link>
           </p>
           {
             error ? <p className='font-bold text-lg'>{error}</p> :
             <>  </>
          } 
    </form>

    <div>
      <SocialLogin/>
    </div>
  
   </div>
    );
};

export default SignUp;