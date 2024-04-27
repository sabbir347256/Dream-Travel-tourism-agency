import { useLoaderData } from "react-router-dom";
import VietnamSpot from "./VietnamSpot";

const VietnamAllSpot = () => {
    const allVietNamData = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mr-7 ml-8 md:ml-12 lg:ml-24 mt-10">
            {
                allVietNamData.map(vietData => <VietnamSpot key={VietnamSpot.id} vietData={vietData}></VietnamSpot>)
            }
        </div>
    );
};

export default VietnamAllSpot;