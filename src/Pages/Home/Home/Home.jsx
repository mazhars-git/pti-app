
import headerImage from '../../../assets/images/image1.png';
const Home = () => {
    return (
        <div className="max-w-screen-lg mx-auto hero mt-8 mb-10 rounded-xl bg-amber-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={headerImage} className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-4xl font-bold text-white">Deliver Food To Your <br /> Door Step!</h1>
                    <p className="py-6 text-orange-100/80">Authentic Food, Quick Service, Fast Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Home;