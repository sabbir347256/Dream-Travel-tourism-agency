import { useContext } from 'react';
import bgImage from './regis.jpg';
import { AuthProvider } from '../../AuthProverder/AuthContext';
import { NavLink } from 'react-router-dom';
const Register = () => {
    const {createUser} = useContext(AuthProvider);
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='grid grid-cols-5 libre-font'>
            <div className='col-span-3 border'>
                <img className='w-[770px] h-[640px]' src={bgImage} alt="" />
            </div>
            <div className='bg-blue-200 border-2 col-span-2'>
                <form onSubmit={handleRegister} className="card-body mt-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" name='photo' placeholder="photoUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white">Register</button>
                    </div>
                    <p className="text-center mt-5">All have an account ? Please <NavLink className='text-blue-800 font-semibold' to='/login'>Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;