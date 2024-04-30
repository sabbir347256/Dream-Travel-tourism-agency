import bgImage from './loginpage.jpg';
import { AuthProvider } from '../../AuthProverder/AuthContext';
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const { signIn, googleLogin, gitHubLogin } = useContext(AuthProvider);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [emailnotMatch, setemailnotMatch] = useState();
    const [passwordError, setPasswordError] = useState();


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setSuccess('');
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Log In Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                );
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setemailnotMatch(alert("Email is not match, Please provide a correct email"))
                setPasswordError(alert("Password does not match, Please provide a correct password"))
                console.error(error);
            })
    }

    const googleAccount = () => {
        googleLogin(provider)
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Log In Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                );
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);

            })
    }
    const githubLogin = () => {
        gitHubLogin(githubProvider)
            .then(result => {
                console.log(result.user)
                setSuccess(
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Log In Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                );
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message)
            })
    }



    return (
        <div className='grid grid-cols-1 md:grid-cols-4  lg:grid-cols-5 libre-font'>
            <Helmet>
                <title>DREAM TRAVEL - Login</title>
            </Helmet>
            <div className='col-span-1 md:col-span-2 lg:col-span-3 border'>
                <img className='w-[770px] h-[300px] md:h-[660px]' src={bgImage} alt="" />
            </div>
            <div className='bg-blue-200 border-2 col-span-1 md:col-span-2 lg:col-span-2'>
                <form onSubmit={handleLogin} className="card-body mt-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        {
                            emailnotMatch && <p className="text-red-700">{emailnotMatch}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {
                            passwordError && <p>{passwordError}</p>
                        }

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-center mt-5">Do not have an account ? Please <NavLink className='text-blue-800 font-semibold' to='/register'>Register</NavLink></p>
                </form>
                <div className="flex items-center px-10 md:px-10 lg:px-0 lg:ml-12">
                    <hr className="w-1/3 " /><p className="text-center lg:mx-3">Login with social accounts</p><hr className="w-1/3" />
                </div>
                <div className="flex  justify-center items-center my-5">
                    <div  className=" hover:text-2xl">
                        <button className="duration-150" onClick={googleAccount}><FcGoogle></FcGoogle></button>
                    </div>
                    <div  className=" hover:text-2xl">
                        <button className="duration-150" ><FaFacebook className="mx-10"></FaFacebook></button>

                    </div>
                    <div className=" hover:text-2xl">
                        <button className="duration-150" onClick={githubLogin} ><FaGithub></FaGithub></button>

                    </div>
                </div>
                <p className="text-center my-4 mb-12 pb-5">Do not have an account ? Please <NavLink className='text-blue-800 font-semibold' to='/register'>Register</NavLink></p>
            </div>
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default Login;