import { useContext } from "react";
import { AuthProvider } from "../../AuthProverder/AuthContext";
import PropTypes from 'prop-types'
import { Slide } from "react-awesome-reveal";

const MySpecificLIst = ({ data }) => {
    const { loading} = useContext(AuthProvider)
    const { averageCost, countryName, photo, location, perYearVisitor, seasonality, shortDescription, spotName, travelTime } = data;
    const handleDelete = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/addspot/${_id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('delete succeesfully')
            }
        })
    }

    return (
        <div>
            {
                loading && <p><span className="loading loading-spinner text-error"></span></p>
            }
            <div className="bg-pink-200 flex flex-col md:flex-col lg:flex-row p-10 ibmFont mt-10">
                <div>
                    <img className="w-[800px] h-[200px] md:h-[400px] lg:h-[500px]  rounded-t-lg md:rounded-lg lg:rounded-l-lg" src={photo} alt="" />
                </div>
                <div className=" p-2 md:p-6 lg:p-16 border bg-[#FFF8DC]">
                    <Slide>
                        <h2 className="font-bold">Spot Name:<span className="font-bold text-2xl ml-5 text-green-600">{spotName}</span></h2>
                        <h2 className="font-bold my-2">Country : <span className="font-bold text-xl ml-9 text-green-600">{countryName}</span></h2>
                        <h2 className="font-bold">Division : <span className="font-bold text-lg ml-9">{location}</span></h2>
                        <hr className="my-2" />
                        <h2><span className="font-bold ">Description</span> : <br /> <span>{shortDescription}</span></h2>
                        <hr className="my-2" />
                        <h2 className="font-bold">Cost : {averageCost}</h2>
                        <h2 className="font-bold my-2">Visitor Per Year : {perYearVisitor}</h2>
                        <h2 className="font-bold">Season : {seasonality}</h2>
                        <h2 className="font-bold mt-2">Travel Time : {travelTime}</h2>
                        <div className="flex mt-7">
                            <button className="btn text-black btn-accent mr-5">UPDATE</button>
                            <button onClick={() => handleDelete(data._id)} className="btn text-black btn-accent">DELETE</button>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

MySpecificLIst.propTypes = {
    data: PropTypes.object
}

export default MySpecificLIst;