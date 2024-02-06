import Banner from "../Banner/Banner";
import BrowseByCategory from "../BrowseByCategory/BrowseByCategory";
import ExploreCities from "../ExploreCities/ExploreCities";
import MainFocus from "../MainFocus/MainFocus";
import Subscribe from "../Subscribe/Subscribe";
import AboutUs from "./AboutUs";
import FindMoreChoose from "./FindMoreChoose";
import HowDoWeWorks from "./HowDoWeWorks";

const Home = () => {
    return (
        <div className="">
           
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <MainFocus></MainFocus>
            <ExploreCities></ExploreCities>
            <AboutUs></AboutUs>
            <FindMoreChoose></FindMoreChoose>
            <HowDoWeWorks></HowDoWeWorks>
            <Subscribe></Subscribe>
            
            
        </div>
    );
};

export default Home;