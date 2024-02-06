import SectionTitle from "../Shered/SectionTitle";
import img1 from '../../assets/b1.png'
import img2 from '../../assets/b2.png'
import img3 from '../../assets/b3.png'
import { FaHome } from 'react-icons/fa';

const MainFocus = () => {
    return (
        <div>
            <SectionTitle subHeading='Our Service' heading={'Our Main Focus'}></SectionTitle>
            <div className="grid grid-cols-3">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="" src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center"><span className="border border-orange-500"><FaHome size={24} color="orange" className="icon" /></span> Buy a poperty </h2>
                    <p className="justify-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum atque ipsam exercitationem laudantium tempora eligendi aliquid harum assumenda iusto consectetur!</p>
                    <div className="card-actions justify-center">
                        <a className="border border-orange-500 p-1 text-orange-500" href="">Find a home</a>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="" src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center"><span className="border border-orange-500"><FaHome size={24} color="orange" className="icon" /></span>sell a Property</h2>
                    <p className="justify-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum atque ipsam exercitationem laudantium tempora eligendi aliquid harum assumenda iusto consectetur!</p>
                    <div className="card-actions justify-center">
                        <a className="border border-orange-500 p-1 text-orange-500" href="">Find a home</a>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="" src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center"><span className="border border-orange-500"><FaHome size={24} color="orange" className="icon" /></span>Rent a poperty</h2>
                    <p className="justify-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum atque ipsam exercitationem laudantium tempora eligendi aliquid harum assumenda iusto consectetur!</p>
                    <div className="card-actions justify-center">
                        <a className="border border-orange-500 p-1 text-orange-500" href="">Find a home</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MainFocus;