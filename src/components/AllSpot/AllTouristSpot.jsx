import { useLoaderData } from "react-router-dom";
import SpecificSpot from './SpecificSpot';

const AllTouristSpot = () => {
    const allSpotData = useLoaderData();
    return (
        <div className="bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mr-7 ml-8 md:ml-12 lg:ml-24 mt-10">
                {
                    allSpotData.map(data => <SpecificSpot key={data.id} data={data}></SpecificSpot>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;