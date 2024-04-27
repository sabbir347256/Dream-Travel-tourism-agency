import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
const CombodiaSpot = ({comboData}) => {
    const {image,spotName,location,id} = comboData
    return (
        <div className="card w-80 bg-blue-100 shadow-xl my-10 libre-font">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{spotName}</h2>
                <hr />
                <p className='font-semibold'>Location : {location}</p>
                <div className="card-actions ">
                    
                    <NavLink to={`/comboviewDetails/${id}`}><button className="btn btn-primary text-white w-64">View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

CombodiaSpot.propTypes ={
    comboData : PropTypes.object
}

export default CombodiaSpot;