const AddTouristSpot = () => {

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
        fetch('http://localhost:5000/addspot', {
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
                    alert('User added successfully')
                }
            })
    }

    return (
        <div className="bgImage border h-screen text-center">
            <form onSubmit={handleAddData}>
                <div className="mt-32 flex items-center justify-center">
                    <div>
                        <input className="p-2 w-96 rounded-xl" type="text" name="photo" placeholder="photo" id="" />
                        <br />
                        <input className="my-3 p-2 w-96 rounded-xl" type="text" name="spotName" placeholder="Tourist Spot Name" id="" />
                        <br />
                        <input className="p-2 w-96 rounded-xl" type="text" name="countryName" placeholder="Country Name" id="" />
                        <br />
                        <input className="my-3 p-2 w-96 rounded-xl" type="text" name="location" placeholder="Location" id="" />
                        <br />
                        <input className="p-2 w-96 rounded-xl" type="text" name="description" placeholder="Description" id="" />
                    </div>
                    <div className="ml-10">
                        <input className="p-2 w-96 rounded-xl" type="text" name="cost" placeholder="Average Cost" id="" />
                        <br />
                        <input className="my-3 p-2 w-96 rounded-xl" type="text" name="seasonality" placeholder="Seasonality" id="" />
                        <br />
                        <input className="p-2 w-96 rounded-xl" type="text" name="travelTime" placeholder="Travel Time" id="" />
                        <br />
                        <input className="my-3 p-2 w-96 rounded-xl" type="text" name="totaVisitorsPerYear" placeholder="Total Visitor Per Year" id="" />
                        <br />
                        <input className="p-2 w-96 rounded-xl" type="text" name="email" placeholder="User Email" id="" />
                    </div>
                </div>
                <input className="w-[810px] mt-3 p-2 rounded-xl" type="text" name="name" placeholder="User Name" id="" />
                <div>
                    <button className="btn btn-success w-[400px] mt-3 text-white text-xl font-bold"><input type="submit" value="Add" /></button>
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;