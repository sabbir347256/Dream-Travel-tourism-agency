import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
const BdSpotData = ({ bdData }) => {
    const {image,spotName,location,id} = bdData;
    // console.log(bdData)
    return (
        <div className="card w-80 bg-blue-200 shadow-xl my-10 libre-font">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{spotName}</h2>
                <hr />
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