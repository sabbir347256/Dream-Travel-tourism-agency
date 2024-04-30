import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../AuthProverder/AuthContext";
import { Helmet } from "react-helmet-async";

const AllTouristSpot = () => {
    const { loading } = useContext(AuthProvider)
    const [allSpotData, setAllSpotData] = useState([]);
    const [value, setvalue] = useState("ascending");

    useEffect(() => {
        fetch('http://localhost:5000/allSpotData')
            .then(res => res.json())
            .then(data => setAllSpotData(data))
    }, [])


    useEffect(() => {
        if (value === "ascending") {
            setAllSpotData(allSpotData.sort((a, b) => b.averageCost  - a.averageCost ));
        } else if (value === "descending") {
            setAllSpotData(allSpotData.sort((a, b) => a.averageCost - b.averageCost ));
        }
    }, [value, allSpotData]);
    
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>DREAM TRAVEL - ALLSPOT</title>
            </Helmet>
            <div className="flex justify-center items-center py-14">
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 text-base font-semibold outline-none"
                    onChange={(e) => setvalue(e.target.value)}
                >
                    <option value="ascending">ascending </option>
                    <option value="descending">descending </option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mr-7 ml-8 md:ml-12 lg:ml-24 mt-10">
                {
                    allSpotData.map(data => <div key={data._id}>
                        {
                            loading && <p><span className="loading loading-spinner text-error"></span></p>
                        }
                        <div className="card w-80 bg-blue-200 shadow-2xl my-10 libre-font h-[600px]">
                            <figure data-aos="flip-left" data-aos-duration='2000' ><img className='w-full' src={data.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">{data.spotName}</h2>
                                <h2>Average Cost : <span className="card-title font-bold text-2xl">${data.averageCost}</span></h2>
                                <p>Total Visitor Per Year : <span className="card-title font-medium text-xl">{data.perYearVisitor}</span></p>
                                <p>Travel Time: <span className="card-title font-medium text-xl">{data.travelTime}</span></p>
                                <hr />
                                <p className='font-semibold'>Seasonality : {data.seasonality}</p>
                                <div className="card-actions ">
                                    <NavLink to={`/allDataViewDetails/${data.id}`}><button className="btn btn-primary text-white w-64">View Details</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;