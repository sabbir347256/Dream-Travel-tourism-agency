import { useLoaderData } from "react-router-dom";
import IndoSpotData from "./IndoSpotData";

const IndoData = () => {
    const indoAllData = useLoaderData();
    return (
        <div className="grid grid-cols-1 ml-8 md:ml-12 lg:ml-24 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mr-7 mt-10">
            {
                indoAllData.map(indoData => <IndoSpotData key={indoData.id} indoData={indoData}></IndoSpotData>)
            }
        </div>
    );
};

export default IndoData;