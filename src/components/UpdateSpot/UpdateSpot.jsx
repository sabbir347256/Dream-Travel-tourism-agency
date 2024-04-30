import { Helmet } from "react-helmet-async";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const updateLoadedData = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateData = e => {
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
        const user = { photo, spotName, countryName, location, description, cost, seasonality, travelTime, totaVisitorsPerYear };
        console.log(user)

        fetch(`http://localhost:5000/addspot/${updateLoadedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : '/mylist')
                }
            })
    }

    return (
        <div className="bgImage border h-screen ">
            <Helmet>
                <title>DREAM TRAVEL - UpdateSpot</title>
            </Helmet>
            <div className="relative top-12">
                <NavLink to='/mylist'><button className="btn btn-primary text-white font-medium px-10 ml-24 ">Back</button></NavLink>
            </div>
            <form onSubmit={handleUpdateData} className="text-center">
                <div className="mt-16 lg:mt-32 flex flex-col md:flex-row lg:flex-row items-center justify-center">
                    <div>
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="photo" placeholder="photo" required />
                        <br />
                        <input className="my-3 p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="spotName" placeholder="Tourist Spot Name" required />
                        <br />
                        <input className="p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="countryName" placeholder="Country Name" required />
                        <br />
                        <input className="my-3 p-2 w-60 md:w-60 lg:w-96 rounded-xl" type="text" name="location" placeholder="Location" required />
                        <br />
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
                    </div>
                </div>
                <input className="w-[240px] md:w-[522px] lg:w-[810px]  p-2 rounded-xl" type="text" name="description" placeholder="Description" required />
                <div>
                    <button className="btn btn-success w-[400px] mt-3 text-white text-xl font-bold"><input type="submit" value="UPDATE" /></button>
                </div>

            </form>
        </div>
    );
};

export default UpdateSpot;