import { useLoaderData } from "react-router-dom";
import MalaysiaSpotData from "./MalaysiaSpotData";

const MalaysiaAllData = () => {
    const malaysiaData = useLoaderData();
    return (
        <div className="grid grid-cols-1 ml-8 md:ml-12 lg:ml-24 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mr-7 mt-10">
            {
                malaysiaData.map(malData => <MalaysiaSpotData key={malData.id} malData={malData}></MalaysiaSpotData>)
            }
        </div>
    );
};

export default MalaysiaAllData;