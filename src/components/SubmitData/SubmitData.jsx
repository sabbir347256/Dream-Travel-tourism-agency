const SubmitData = () => {
    const handleSubmitUser = (event) =>{
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const image = form.image.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const perYearVisitor = form.perYearVisitor.value;
        const user = {id,image,spotName,countryName,location,shortDescription,averageCost,seasonality,travelTime,perYearVisitor};
        console.log(user)

        fetch('http://localhost:5000/colombiaData',{
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('User added successfully')
            }
        })
        // fetch('http://localhost:5000/tourismData',{
        //     method: 'POST',
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        //     if(data.insertedId){
        //         alert('User added successfully')
        //     }
        // }),
        // fetch('http://localhost:5000/thaiData',{
        //     method: 'POST',
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        //     if(data.insertedId){
        //         alert('User added successfully')
        //     }
        // }),
        // fetch('http://localhost:5000/indoData',{
        //     method: 'POST',
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        //     if(data.insertedId){
        //         alert('User added successfully')
        //     }
        // }),
        // fetch('http://localhost:5000/malData',{
        //     method: 'POST',
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        //     if(data.insertedId){
        //         alert('User added successfully')
        //     }
        // }),
        // fetch('http://localhost:5000/vietData',{
        //     method: 'POST',
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        //     if(data.insertedId){
        //         alert('User added successfully')
        //     }
        // })

    }
    return (
        <div>
            <form onSubmit={handleSubmitUser}>
                <input type="text" name="id" id="" />
                <br />
                <input type="text" name="image" id="" />
                <br />
                <input type="text" name="spotName" id="" />
                <br />
                <input type="text" name="countryName" id="" />
                <br />
                <input type="text" name="location" id="" />
                <br />
                <input type="text" name="shortDescription" id="" />
                <br />
                <input type="text" name="averageCost" id="" />
                <br />
                <input type="text" name="seasonality" id="" />
                <br />
                <input type="text" name="travelTime" id="" />
                <br />
                <input type="text" name="perYearVisitor" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SubmitData;