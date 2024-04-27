import { useLoaderData } from "react-router-dom";
import CombodiaSpot from "./CombodiaSpot";

const CombodiaAllData = () => {
    const combodiaData = useLoaderData();
    return (
        <div className="grid grid-cols-1 ml-8 md:ml-12 lg:ml-24 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mr-7 mt-10">
            {
                combodiaData.map(comboData => <CombodiaSpot key={CombodiaSpot.id} comboData={comboData}></CombodiaSpot>)
            }
        </div>
    );
};

export default CombodiaAllData;