import { FaUserCircle, FaRegIdBadge } from "react-icons/fa";
import { SlSocialFoursqare } from "react-icons/sl";
import { RiGalleryLine } from "react-icons/ri";
import image from './image-6.jpg'
const Discount = () => {
    return (
        <div className="flex flex-col md:flex-col lg:flex-row libre-font mt-20 max-w-6xl mx-auto mr-7">
            <div className="w-3/5 ml-0 md:ml-44 lg:ml-0">
                <h2 data-aos="fade-right" data-aos-duration='1000' className="text-4xl text-center font-extrabold mb-10 mt-20  w-[350px] md:w-full lg:w-full left-5 md:left-0 lg:left-0 relative">90,100 Marker In 120+ Countries.</h2>
                <div className="flex flex-col md:flex-row lg:flex-row">
                    <div className="relative left-20 md:left-0 lg:left-0" data-aos="fade-right" data-aos-duration='1000'>
                        <div className="flex items-center">
                            <div className="bg-green-400 mr-4 p-2 rounded-full ">
                                <FaUserCircle className="text-pink-200"></FaUserCircle>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold mb-3">100 New Daily User</h2>
                                <p>Here All These New User.</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-12">
                            <div className="bg-amber-400 mr-4 p-2 rounded-full ">
                                <SlSocialFoursqare></SlSocialFoursqare>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold mb-3">Fine Clean Design</h2>
                                <p>Please find there uniqe design and place</p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10 relative left-10 mt-7 md:mt-0 lg:mt-0 md:left-0 lg:left-0"data-aos="fade-right" data-aos-duration='1000'>
                        <div className="flex items-center mb-12">
                            <div className="bg-red-400 mr-4 p-2 rounded-full" >
                                <FaRegIdBadge></FaRegIdBadge>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold mb-3">Strong Brand Building</h2>
                                <p>Here see these our agency brand and bonding in client</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-indigo-300 mr-4 p-2 rounded-full">
                                <RiGalleryLine></RiGalleryLine>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold mb-3">Well Crafted Listings</h2>
                                <p>Here listing for our all tourist place</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-0 md:ml-16 lg:ml-0" data-aos="fade-left" data-aos-duration='1000'>
                <img className="rounded-full" src={image} alt="" />
            </div>
        </div>
    );
};

export default Discount;