import React, { createContext, useEffect, useState } from "react";
import auth from "./../components/firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [currentUser, setCurentUser] = useState(null);


  useEffect(()=>{
   const unSubcribed = onAuthStateChanged(auth,(user)=>{
      setCurentUser(user);
    })
    return unSubcribed

  },[])

  const googleProvider = new GoogleAuthProvider();
  
  const gooleLogin =() =>{
    return signInWithPopup(auth,googleProvider)
  }
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const userSignOut =()=>{
    return signOut(auth)
  }

  const authInfo = { createUser, userLogin, userSignOut ,currentUser, gooleLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
