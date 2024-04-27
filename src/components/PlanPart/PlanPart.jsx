import image from './image-12.jpg'
const PlanPart = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row max-w-6xl mx-auto robo-font mt-20'> 
            <div>
                <img className='rounded-full' src={image} alt="" />
            </div>
            <div className='ml-10 mt-16'>
                <h2 className='text-4xl font-bold'>Plan Your Trip with Trevily</h2>
                <p className='my-4'>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which do not look even slightly.</p>
                <ul>
                    <p>Invest in your simply neighborhood</p>
                    <p>Support people in free text extreme need</p>
                    <p>Largest global industrial business community</p>
                </ul>
                <button className='btn bg-[#E8604c] text-white mt-4'>BOOK WITH US NOW</button>
            </div>
        </div>
    );
};

export default PlanPart;