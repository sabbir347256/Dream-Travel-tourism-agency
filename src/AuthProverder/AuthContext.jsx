import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'
export const AuthProvider = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current user is stay here', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name,photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoUrl
        })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    };

    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const gitHubLogin = (githubProvider) =>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider);
    }

    const authInfo ={
        user,
        createUser,
        signIn,
        logout,
        loading,
        googleLogin,
        gitHubLogin,
        updateUserProfile
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

AuthContext.propTypes ={
    children : PropTypes.object
}
export default AuthContext;