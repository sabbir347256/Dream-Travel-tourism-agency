import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
const BdSpotData = ({ bdData }) => {
    const {image,spotName,location,countryName,shortDescription,averageCost,seasonality,id} = bdData;
    // console.log(bdData)
    return (
        <div className="card w-80 bg-blue-200 shadow-xl my-10 libre-font">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{spotName}</h2>
                <h2>Country: <span className="card-title font-bold text-xl text-green-600"> {countryName}</span></h2>
                <hr />
                <p><span className='font-bold'>Description</span> : {shortDescription.slice(0,50)}.....</p>
                <p><span className='font-bold'>Average Cost :</span> : {averageCost}</p>
                <p><span className='font-bold'>Seasonality  :</span> : {seasonality}</p>
                <p className='font-semibold'>Location : {location}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary text-white w-full"><NavLink to={`/viewDetails/${id}`}>View Details</NavLink></button>
                </div>
            </div>
        </div>
    );
};

BdSpotData.propTypes ={
    bdData : PropTypes.object
}

export default BdSpotData;