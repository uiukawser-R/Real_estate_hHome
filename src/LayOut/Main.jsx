import { Outlet } from "react-router-dom";
import NavBar from "../Pagees/Navbar/NavBar";
import Banner from "../Pagees/Banner/Banner";
import BrowseByCategory from "../Pagees/BrowseByCategory/BrowseByCategory";
import MainFocus from "../Pagees/MainFocus/MainFocus";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <MainFocus></MainFocus>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;