import propTypes from 'prop-types'
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
const MalaysiaSpotData = ({malData}) => {
    const {image,spotName,location,countryName,shortDescription,averageCost,seasonality,id} = malData;
    return (
        <div className="card w-80 bg-base-100 shadow-xl my-10 libre-font">
            <Helmet>
                <title>DREAM TRAVEL - MalaysiaTourisSpot</title>
            </Helmet>
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{spotName}</h2>
                <h2>Country: <span className="card-title font-bold text-xl text-green-600"> {countryName}</span></h2>
                <hr />
                <p><span className='font-bold'>Description</span> : {shortDescription.slice(0,50)}.....</p>
                <p><span className='font-bold'>Average Cost :</span> : {averageCost}</p>
                <p><span className='font-bold'>Seasonality  :</span> : {seasonality}</p>
                <p className='font-semibold'>Location : {location}</p>
                <div className="card-actions ">
                <NavLink to={`/malviewDetails/${id}`}><button className="btn btn-primary text-white w-full">View Details</button></NavLink>
                    
                </div>
            </div>
        </div>
    );
};
MalaysiaSpotData.propTypes ={
    malData : propTypes.object
}
export default MalaysiaSpotData;