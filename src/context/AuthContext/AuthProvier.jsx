import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider , signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvier = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{

   const unsbubscibe=  onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    setLoading(false)

     })
     return ()=>{
         unsbubscibe();
     }

    },[])





    const authInfo = { user, loading, createUser,signInUser,signInWithGoogle,logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvier;