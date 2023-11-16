import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Config/firebase/firebase.config";


export const AuthContext   = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState( true )

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

    // for logging out 
    const logOut = ( ) => {
        setLoading( true )
        return  signOut( auth )
    }


    // for onauthchange
    useEffect( ( ) => {
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
            console.log("current user is ", currentUser)
            setLoading(false)
        });
        return ( ) => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
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