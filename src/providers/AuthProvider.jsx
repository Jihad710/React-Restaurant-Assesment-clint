import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword , signInWithEmailAndPassword,  signOut} from "../firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email,password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email,password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


const logOut = () => {
    setloading(true)
    return signOut(auth)
}
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setloading(false);
        })
        return () => {
            return unsubscribe();
        }
    })



  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
 
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
