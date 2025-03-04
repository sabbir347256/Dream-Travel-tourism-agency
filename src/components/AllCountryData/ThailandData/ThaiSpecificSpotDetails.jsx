import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const ThaiSpecificSpotDetails = () => {
    const thaiSpotDetails = useLoaderData();
    const { id } = useParams();
    const detailsData = thaiSpotDetails.find(data => data.id == id);
    const { averageCost, countryName, image, location, perYearVisitor, seasonality, shortDescription, spotName, travelTime } = detailsData;
    return (
        <div className="bg-pink-200 flex flex-col md:flex-col lg:flex-row p-10 ibmFont">
            <Helmet>
                <title>DREAM TRAVEL - {`${spotName}`}</title>
            </Helmet>
            <div>
                <img className="w-[1200px] h-[200px] md:h-[400px] lg:h-[500px]  rounded-t-lg md:rounded-lg lg:rounded-l-lg" src={image} alt="" />
            </div>
            <div className=" p-2 md:p-6 lg:p-16 border bg-[#FFF8DC]">
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
            </div>
        </div>
    );
};

export default ThaiSpecificSpotDetails;