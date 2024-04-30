import logo from './images.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Fotter = () => {

    return (
        <div>
            <footer className="footer mt-32 p-10 footerBg text-white font-bold pl-20">
                <aside className=' flex justify-center items-center'>
                    <img className='w-20 h-20 rounded-full' src={logo} alt="" />
                    <p>D-CARE  Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav className='ml-0 md:ml-0 lg:ml-0'>
                    <h6 className="text-green-300 font-bold">Support</h6>
                    <a className="link link-hover text-white">Terms</a>
                    <a className="link link-hover text-white">Careers</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </nav>
                <nav className='relative left-44 md:left-0 lg:left-0 bottom-[170px] md:bottom-0 lg:bottom-0'>
                    <h6 className="text-green-300 font-bold">Company</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav className='relative left-20 md:left-0 lg:left-0  bottom-40 md:bottom-0 lg:bottom-0'>
                    <h6 className="text-green-300 font-bold">Legal</h6>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                    <div className='flex relative right-7 md:right-0 lg:right-0 mt-3 md:mt-0 lg:mt-0'>
                        <div className='bg-blue-950 p-2 rounded-full hover:text-lg duration-150' >
                            <FaFacebookF></FaFacebookF>
                        </div>
                        <div className='bg-blue-950 p-2 rounded-full mx-3 hover:text-lg duration-150'>
                            <FaTwitter></FaTwitter>
                        </div>
                        <div className='bg-blue-950 p-2 rounded-full hover:text-lg duration-150'>
                            <FaInstagram></FaInstagram>
                        </div>
                        <div className='bg-blue-950 p-2 rounded-full ml-3 hover:text-lg duration-150'>
                            <FaLinkedinIn></FaLinkedinIn>
                        </div>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Fotter;