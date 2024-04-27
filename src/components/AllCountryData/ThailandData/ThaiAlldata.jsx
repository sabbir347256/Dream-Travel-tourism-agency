import { useLoaderData } from "react-router-dom";
import ThaiData from "./ThaiData";

const ThaiAlldata = () => {
    const thaiAllData = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 md:ml-12 lg:ml-24 max-w-6xl mx-auto mr-7 mt-10">
            {
                thaiAllData.map(thaiData => <ThaiData key={thaiData.id} thaiData={thaiData}></ThaiData>)
            }
        </div>
    );
};

export default ThaiAlldata;