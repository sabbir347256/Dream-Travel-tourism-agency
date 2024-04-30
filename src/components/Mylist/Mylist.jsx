import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../AuthProverder/AuthContext";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Mylist = () => {
    const { user } = useContext(AuthProvider);

    const [mylist, setMylist] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/mylisSpot/${user.email}`)
            .then(res => res.json())
            .then(data => setMylist(data))
    }, []);


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mylisSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = mylist.filter(spot => spot._id !== _id);
                            setMylist(remaining);
                        }
                    })

            }
        });

    }

    return (
        <div>
            <Helmet>
                <title>DREAM TRAVEL - MyList</title>
            </Helmet>
            {
                mylist.map(data => <div key={data._id} className="bg-pink-200 flex flex-col md:flex-col lg:flex-row p-10 ibmFont mt-10">
                    <div>
                        <img className="w-[1200px] h-[200px] md:h-[400px] lg:h-[600px]    rounded-t-lg md:rounded-lg lg:rounded-l-lg" src={data.photo} alt="" />
                    </div>
                    <div className=" p-2 md:p-6 lg:p-16 border bg-[#FFF8DC]">
                        <Slide>
                            <h2 className="font-bold">Spot Name:<span className="font-bold text-2xl ml-5 text-green-600">{data.spotName}</span></h2>
                            <h2 className="font-bold my-2">Country : <span className="font-bold text-xl ml-9 text-green-600">{data.countryName}</span></h2>
                            <h2 className="font-bold">Division : <span className="font-bold text-lg ml-9">{data.location}</span></h2>
                            <hr className="my-2" />
                            <h2><span className="font-bold ">Description</span> : <br /> <span>{data.description}</span></h2>
                            <hr className="my-2" />
                            <h2 className="font-bold">Cost : {data.cost}</h2>
                            <h2 className="font-bold my-2">Visitor Per Year : {data.totaVisitorsPerYear}</h2>
                            <h2 className="font-bold">Season : {data.seasonality}</h2>
                            <h2 className="font-bold mt-2">Travel Time : {data.travelTime}</h2>
                            <div className="flex mt-7">
                                <NavLink to={`/updateSpot/${data._id}`} ><button className="btn text-black btn-accent mr-5">UPDATE</button></NavLink>
                                <button onClick={() => handleDelete(data._id)} className="btn text-black btn-accent">DELETE</button>
                            </div>
                        </Slide>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Mylist;