import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/firebase/firebase.config";


export const AuthContext   = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState( true )
    const googleProvider = new GoogleAuthProvider();


    // for creating new user 
    const createUser = ( email, password ) => {
        setLoading( true )
        return createUserWithEmailAndPassword( auth, email, password )
    }

    // for login or signin
    const signIn = ( email, password ) => {
        setLoading( true )
        return signInWithEmailAndPassword( auth , email, password )
    }
    
    // for login with google
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup( auth, googleProvider)
    }

    // for updating user profile 
    const updateUserProfile = ( name, image ) => {
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL: image
        })
    }
        

    // for logging out 
    const logOut = ( ) => {
        setLoading( true )
        return  signOut( auth )
    }


    // for onauthchange
    useEffect( ( ) => {
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
            // console.log("current user is ", currentUser)
            setLoading(false)
        });
        return ( ) => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
        updateUserProfile,
        googleSignIn,
        logOut,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;