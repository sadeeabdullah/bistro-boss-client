import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext   = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState( true )
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();


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
            if(currentUser){
                const  userInfo =   { email : currentUser.email}
                // get token and store client
                axiosPublic.post( '/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                //TODO: when log out then remove the token(if token stored in a client  side: LocalStorage, cookies,in memory)
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return ( ) => {
            return unsubscribe();
        }
    }, [axiosPublic])

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