import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddTouristSpot = () => {

    const [success,setSuccess] = useState('');
    const navigate = useNavigate();

    const handleAddData = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const email = form.email.value;
        const name = form.name.value;
        const user = { photo, spotName, countryName, location, description, cost, seasonality, travelTime, totaVisitorsPerYear, email, name };
        console.log(user)
        setSuccess('');
        fetch('https://tourism-managment-server-site.vercel.app/addspot', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setSuccess(
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Spot Successfully Added in your List",
                            showConfirmButton: false,
                            timer: 1500
                          })
                    );
                    navigate(location?.state ? location.state : '/myList')
                }
            })
    }

    return (
        <div className="bgImage border h-screen text-center">
            <Helmet>
                <title>DREAM TRAVEL - AddSpot</title>
            </Helmet>
            <form onSubmit={handleAddData}>
                <div className="mt-16 lg:mt-32 flex flex-col md:flex-row lg:flex-row items-center justify-center">
                    <div>
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="photo" placeholder="photo" required  />
                        <br />
                        <input className="my-3 p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="spotName" placeholder="Tourist Spot Name" required />
                        <br />
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="countryName" placeholder="Country Name" required />
                        <br />
                        <input className="my-3 p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="location" placeholder="Location" required />
                        <br />
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="description" placeholder="Description" required />
                    </div>
                    <div className="mt-2 md:mt-0 lg:mt-0 ml-0 md:ml-10 lg:ml-10">
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="cost" placeholder="Average Cost" required />
                        <br />
                        <input className="my-3 p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="seasonality" placeholder="Seasonality" required />
                        <br />
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="travelTime" placeholder="Travel Time" required />
                        <br />
                        <input className="my-3 p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="totaVisitorsPerYear" placeholder="Total Visitor Per Year" required />
                        <br />
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="email" placeholder="User Email" required />
                    </div>
                </div>
                <input className="w-[240px] md:w-[522px] lg:w-[810px] mt-3 p-2 rounded-xl" type="text" name="name" placeholder="User Name" required />
                <div>
                    <button className="btn btn-success w-[400px] mt-3 text-white text-xl font-bold"><input type="submit" value="Add" /></button>
                </div>
                {
                    success && <p>{success}</p>
                }
            </form>
        </div>
    );
};

export default AddTouristSpot;