
import { NavLink } from 'react-router-dom';
import bd from './New folder/images.jpg'
import thai from './New folder/thailand.jpg'
import indo from './New folder/indo.jpg'
import mal from './New folder/mal.jpg'
import viet from './New folder/viet.jpg'
import cam from './New folder/cam.jpg'


const TourismCountry = () => {
    return (
        <div className="libre-font bg-gray-50  max-w-6xl mx-auto pt-10 rounded-lg ">
            <div className="text-emerald-800">
                <h2 className="text-center text-4xl font-bold ">Checkout Beautiful Places <br /> Arround the World</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-7'>
                <div className="card w-11/12 bg-blue-100 border border-r-yellow-300  shadow-xl mt-20"data-aos="flip-left" data-aos-duration='2000'>
                    <figure className="px-10 pt-10">
                        <img src={bd} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BANGLADESH</h2>
                        <NavLink to={`/bdviewDetails`}><button className="btn w-full btn-success text-white mt-4">Bangladesh All Place View </button></NavLink>
                    </div>
                </div>
                <div className="card w-11/12 bg-blue-100 border border-r-yellow-300  shadow-xl mt-20"
                data-aos="flip-right" data-aos-duration='2000'>
                    <figure className="px-10 pt-10">
                        <img src={thai} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">THAILAND</h2>
                        <NavLink to='/thiaViewDetails'><button className="btn w-full btn-success text-white mt-4">Thailand All Place View </button></NavLink>
                    </div>
                </div>
                <div className="card w-11/12 bg-blue-100  border-r-yellow-300  shadow-xl mt-20"data-aos="flip-left" data-aos-duration='2000'>
                    <figure className="px-10 pt-10">
                        <img src={indo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">INDONESIA</h2>
                        <NavLink to='/indovViewDetails'><button className="btn w-full btn-success text-white mt-4">INDONESIA All Place View </button></NavLink>
                    </div>
                </div>
                <div className="card w-11/12 bg-blue-100 border border-r-yellow-300  shadow-xl mt-20"data-aos="flip-right" data-aos-duration='2000'>
                    <figure className="px-10 pt-10">
                        <img src={mal} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MALAYSIA</h2>
                        <NavLink to='/malViewDetails'><button className="btn w-full btn-success text-white mt-4">MALAYSIA All Place View </button></NavLink>
                    </div>
                </div>
                <div className="card w-11/12 bg-blue-100 border border-r-yellow-300  shadow-xl mt-20"data-aos="flip-left" data-aos-duration='2000'>
                    <figure className="px-10 pt-10">
                        <img src={viet} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">VIETNAM</h2>
                        <NavLink to='/vietViewDetails'><button className="btn w-full btn-success text-white mt-4">VIETNAM All Place View </button></NavLink>
                    </div>
                </div>
                <div className="card w-11/12 bg-blue-100 border border-r-yellow-300  shadow-xl mt-20"data-aos="flip-right" data-aos-duration='2000'>
                    <figure className="px-10 pt-10">
                        <img src={cam} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CAMBODIA</h2>
                        <NavLink to='/comboViewDetails'><button className="btn w-full btn-success text-white mt-4">CAMBODIA All Place View </button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourismCountry;