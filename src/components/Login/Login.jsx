import bgImage from './loginpage.jpg';
import { AuthProvider } from '../../AuthProverder/AuthContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';
const Login = () => {
    const { signIn,googleLogin,gitHubLogin } = useContext(AuthProvider);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const googleAccount = () => {
        googleLogin(provider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);

            })
    }
    const githubLogin =() =>{
        gitHubLogin(githubProvider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error.message)
        })
    }



    return (
        <div className='grid grid-cols-5 libre-font'>
            <div className='col-span-3 border'>
                <img className='w-[770px] h-[640px]' src={bgImage} alt="" />
            </div>
            <div className='bg-blue-200 border-2 col-span-2'>
                <form onSubmit={handleLogin} className="card-body mt-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

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
                <div data-aos="fade-left" data-aos-duration='1000' className=" hover:text-2xl">
                    <button className="duration-150" onClick={googleAccount}><FcGoogle></FcGoogle></button>
                </div>
                <div data-aos="fade-left" data-aos-duration='1000' className=" hover:text-2xl">
                    <button className="duration-150" ><FaFacebook className="mx-10"></FaFacebook></button>

                </div>
                <div data-aos="fade-left" data-aos-duration='1000' className=" hover:text-2xl">
                    <button className="duration-150" onClick={githubLogin} ><FaGithub></FaGithub></button>

                </div>
            </div>
            <p data-aos="fade-up" data-aos-duration='1000' className="text-center my-4 mb-12 pb-5">Do not have an account ? Please <NavLink className='text-blue-800 font-semibold' to='/register'>Register</NavLink></p>
            </div>
        </div>
    );
};

export default Login;