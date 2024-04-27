import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'
export const AuthProvider = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current user is stay here', currentUser)
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    };

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const gitHubLogin = (githubProvider) =>{
        return signInWithPopup(auth,githubProvider);
    }

    const authInfo ={
        user,
        createUser,
        signIn,
        logout,
        googleLogin,
        gitHubLogin
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