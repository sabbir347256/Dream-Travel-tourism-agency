import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
const MalaysiaSpotData = ({malData}) => {
    const {image,spotName,location,id} = malData;
    return (
        <div className="card w-80 bg-base-100 shadow-xl my-10 libre-font">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{spotName}</h2>
                <hr />
                <p className='font-semibold'>Location : {location}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary text-white w-full"><NavLink to={`/malviewDetails/${id}`}>View Details</NavLink></button>
                </div>
            </div>
        </div>
    );
};
MalaysiaSpotData.propTypes ={
    malData : propTypes.object
}
export default MalaysiaSpotData;