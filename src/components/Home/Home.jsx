import { Helmet } from "react-helmet-async";
import Discount from "../Discount/Discount";
import PlanPart from "../PlanPart/PlanPart";
import Slider from "../Slider/Slider";
import TourismCountry from './../TourismCountry/TourismCountry';
import TouristSpotSetion from "../TouristSpotSection/TouristSpotSetion";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DREAM TRAVEL - HOME</title>
            </Helmet>
            <Slider></Slider>
            <TouristSpotSetion></TouristSpotSetion>
            <TourismCountry></TourismCountry>
            <Discount></Discount>
            <PlanPart></PlanPart>
        </div>
    );
};

export default Home;