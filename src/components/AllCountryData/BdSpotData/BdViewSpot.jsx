import { useLoaderData } from "react-router-dom";
import BdSpotData from "./BdSpotData";

const BdViewSpot = () => {
    const allBdSpotData = useLoaderData();
    console.log(allBdSpotData)
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto  ml-8 md:ml-10 lg:ml-24 mt-10">
            {
                allBdSpotData && allBdSpotData?.map(bdData => <BdSpotData key={bdData.id} bdData={bdData}></BdSpotData>)
            }
        </div>
    );
};

export default BdViewSpot;