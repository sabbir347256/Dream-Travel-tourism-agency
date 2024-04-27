import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../../AuthProverder/AuthContext";

const Navbar = () => {
    const {user,logout} = useContext(AuthProvider);
    const [theme,setTheme] = useState('light');

    useEffect(() =>{
        localStorage.setItem('theme',theme);
        const localtheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localtheme)
    },[theme])

    const toggleTheme = e =>{
        if(e.target.checked){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }
    console.log(theme);
    const handleSignout = () => {
        logout()
            .then()
            .catch()
    }

    const navlinks = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allSpot'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addSpot'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList'>My List</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>

    </>
    return (
        <div className={`navbar bg-gray-100 text-black robo-font shadow-lg `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">DREAM Travel</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navlinks}
                </ul>
            </div>
            <label className="cursor-pointer grid place-items-center mx-6">
                <input
                onChange={toggleTheme}
                type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            <div className="navbar-end">
                <img className="rounded-full h-12 mr-5 " title={user ? user.displayName : ''} src={user ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="no photo" />
                {
                    user ? <NavLink to='/login'><a onClick={handleSignout} className="shadow-lg btn ">Log Out</a></NavLink> : <NavLink to='/login'><a className="shadow-lg btn ">LOGIN</a></NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;