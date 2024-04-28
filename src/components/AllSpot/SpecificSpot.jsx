import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import { useContext } from "react";
import { AuthProvider } from "../../AuthProverder/AuthContext";
const SpecificSpot = ({ data }) => {
    const { loading } = useContext(AuthProvider)
    const { averageCost, image, perYearVisitor, seasonality, spotName, travelTime, id } = data;
    return (
        <div>
            {
                loading && <p><span className="loading loading-spinner text-error"></span></p>
            }
            <div className="card w-80 bg-blue-200 shadow-2xl my-10 libre-font">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{spotName}</h2>
                    <h2>Average Cost : <span className="card-title font-bold text-2xl">{averageCost}</span></h2>
                    <p>Total Visitor Per Year : <span className="card-title font-medium text-xl">{perYearVisitor}</span></p>
                    <p>Travel Time: <span className="card-title font-medium text-xl">{travelTime}</span></p>
                    <hr />
                    <p className='font-semibold'>Seasonality : {seasonality}</p>
                    <div className="card-actions ">
                        <NavLink to={`/allDataViewDetails/${id}`}><button className="btn btn-primary text-white w-64">View Details</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
SpecificSpot.propTypes = {
    data: PropTypes.object
}
export default SpecificSpot;