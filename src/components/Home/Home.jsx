import Discount from "../Discount/Discount";
import PlanPart from "../PlanPart/PlanPart";
import Slider from "../Slider/Slider";
import TourismCountry from './../TourismCountry/TourismCountry';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TourismCountry></TourismCountry>
            <Discount></Discount>
            <PlanPart></PlanPart>
        </div>
    );
};

export default Home;