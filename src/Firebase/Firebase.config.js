import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAiEO-JACH1qaiO5nnZmu6VKr0MRhnDq4I",
    authDomain: "tourism-managment-1daa3.firebaseapp.com",
    projectId: "tourism-managment-1daa3",
    storageBucket: "tourism-managment-1daa3.appspot.com",
    messagingSenderId: "747206403918",
    appId: "1:747206403918:web:2d2c1278cf31adb14fa01f"
    // apiKey: import.meta.env.VITE_APIKEY,
    // authDomain: import.meta.env.VITE_AUTHDOMAIN,
    // projectId: import.meta.env.VITE_PROJECTID,
    // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    // appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;