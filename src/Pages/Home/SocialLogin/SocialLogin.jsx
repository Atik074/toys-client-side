import React, { useContext, useState } from 'react';
import { FcGoogle} from "react-icons/fc";
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { googleSingIn} = useContext(AuthContext) 
    const [error , setError] = useState()
    const navigate = useNavigate() 
    const location = useLocation() 

    const from = location.state?.from?.pathname || '/'

    const handleGoogleUser = () =>{
        googleSingIn() 
        .then(result =>{
           const user = result.user
           navigate(from , {replace:true})
        })
        .catch(err =>{
        const error = err.message
           console.log(error)
           setError(error)
        })
    }


    return (
        <div>
         <div className='text-center'>
         <div className="divider w-1/2 mx-auto text-2xl my-10"> Or </div>
       
         <button onClick={handleGoogleUser} className="btn border w-1/4 text-xl capitalize">
          <span><FcGoogle className='text-3xl'/></span>
          Continue with Google
          </button>
       </div>
       {  
            error ? <p className='font-bold text-lg text-center mt-4'>{error}</p> :
             <></>
             }
       
        </div>
    );
};

export default SocialLogin;