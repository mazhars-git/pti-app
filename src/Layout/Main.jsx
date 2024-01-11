import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import PopularItems from '../Pages/Home/PopularItems/PopularItems';
import RecommendedItems from '../Pages/Home/RecommendedItems/RecommendedItems';

const Main = () => {
    return (
        <div className='container'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <PopularItems></PopularItems>
            <RecommendedItems></RecommendedItems>
            <Footer></Footer>
        </div>
    );
};

export default Main;