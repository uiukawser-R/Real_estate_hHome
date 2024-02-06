import { Outlet } from "react-router-dom";
import NavBar from "../Pagees/Navbar/NavBar";
import Banner from "../Pagees/Banner/Banner";
import BrowseByCategory from "../Pagees/BrowseByCategory/BrowseByCategory";
import MainFocus from "../Pagees/MainFocus/MainFocus";
import ExploreCities from "../Pagees/ExploreCities/ExploreCities";
import Footer from "../Pagees/Footer/Footer";
import Subscribe from "../Pagees/Subscribe/Subscribe";

const Main = () => {
    return ( 
        <div>
            {/* <NavBar></NavBar>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <MainFocus></MainFocus>
            <ExploreCities></ExploreCities>
            <Subscribe></Subscribe> */}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            
        </div>
    );
};

export default Main;