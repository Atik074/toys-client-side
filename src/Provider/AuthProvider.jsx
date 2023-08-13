import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';

 export const AuthContext = createContext()
    const auth =getAuth(app)
    const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null) 
    const [loading ,setLoading] = useState(true) 

// google signIn 
  const googleSingIn = ()=>{
     return signInWithPopup(auth , provider)

   }
// new user sign in
    const signUpUser =( email , password  ) =>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth , email , password)
    
    }
  
 useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth , currentUser => {
         setUser(currentUser)
         console.log(currentUser)
        setLoading(false)
 })

     return ()=>{
    return unSubscribe() }
        

      } , [])
    

//user  login 
    const SignInUser =(email , password )=>{
        setLoading(true)
    return signInWithEmailAndPassword(auth ,email,password)
 
    }
// user logout 
const logOut =()=>{
    setLoading(true)
   return signOut(auth)
}
 

 const authInfo ={
         user ,
         loading ,
         googleSingIn ,
         signUpUser ,
         SignInUser ,
         logOut 
    }

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;