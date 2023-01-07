import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();


export const useAuth = () => {
   return useContext(AuthContext);
};



export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState();

   const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   useEffect(() => {
      const unsuscribe = onAuthStateChanged(auth, (user) => {
         setCurrentUser(user);
      });

      return unsuscribe;
   }, []);



   const value = {
      currentUser,
      signup
   };

   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
};
