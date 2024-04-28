import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from './New folder/bd.jpg';
import pic2 from './New folder/indonesia.jpg';
import pic3 from './New folder/cambabia.jpg';
import pic4 from './New folder/malyesia.jpg';
import pic5 from './New folder/vietnum.jpg';
import pic6 from './New folder/thiland.jpg';
import { useTypewriter } from 'react-simple-typewriter'


const Slider = () => {
    const [typeEffect] = useTypewriter({
        words :['Your Journey Begins Here '],
        loop :{},
        typeSpeed : 100,
        deleteSpeed:40,
        
    })
    
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel className=" shadow-lg" responsive={responsive}>
                <div><img className="w-[435px] h-80" src={pic1} alt="" /></div>
                <div><img className="w-[435px] h-80" src={pic2} alt="" /></div>
                <div><img className="w-[435px] h-80" src={pic3} alt="" /></div>
                <div><img className="w-[435px] h-80" src={pic4} alt="" /></div>
                <div><img className="w-[435px] h-80" src={pic5} alt="" /></div>
                <div><img className="w-[435px] h-80" src={pic6} alt="" /></div>
            </Carousel>
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold relative bottom-60  z-10 text-[#FF0060] libre-font">{typeEffect}<br /> Be Safe & Careful</h2>
        </div>
    );
};

export default Slider;