
import headerImage from '../../../assets/images/image1.png';
const Home = () => {
    return (
        <div className="hero my-8 rounded-xl bg-orange-400">
            <div className="hero-content flex-col lg:flex-row-reverse px-20">
                <img src={headerImage} className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-4xl font-bold text-white">Deliver Food To Your <br /> Door Step!</h1>
                    <p className="py-6 text-base-100">Authentic Food, Quick Service, Fast Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Home;