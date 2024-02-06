import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import img1 from '../../assets/f1.png'
import img2 from '../../assets/f2.png'
import img3 from '../../assets/f3.png'
import img4 from '../../assets/f4.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer mt-10 p-10 bg-blue-950 text-white">
            <aside>
              <h1 className="text-4xl">Kavinax</h1>
               <p>Lorem, ipsum dolor sit amet consectetur<br/>adipisicing elit. A praesentium reiciendis<br/> natus consequatur, quibusdam modi facere molestias</p>
               <div className='flex gap-2'>
               <div className='border rounded-full p-1 bg-white text-orange-600'>< FaFacebookF /></div>
               <div className='border rounded-full p-1 bg-white text-orange-600'><FaInstagram /></div>
               <div className='border rounded-full p-1 bg-white text-orange-600'><FaTwitter /></div>
               <div className='border rounded-full p-1 bg-white text-orange-600'><FaLinkedinIn /></div>
               <div className='border rounded-full p-1 bg-white text-orange-600'><FaYoutube /></div>
               </div>
            </aside>
            <nav>
                <h6 className="footer-title text-white border-b-2 border-orange-600">Quick Link</h6>
                <a className="hover:text-orange-600">About Us</a>
                <a className="hover:text-orange-600">Poperty</a>
                <a className="hover:text-orange-600">Our Agents</a>
                <a className="hover:text-orange-600">Carears</a>
                <a className="hover:text-orange-600">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title border-b-2 border-orange-600">Recent Post</h6>
                <div className='grid grid-cols-2 gap-1'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </nav>
            <nav>
                <h6 className="footer-title">Contact Us</h6>
                <a className="link link-hover">Phone<br/> ++4422947265382</a>
                <a className="link link-hover">Email,<br/> support@you.com</a>
                <a className="link link-hover">Address,<br/> 7124 Landmark Tower</a>
            </nav>
        </footer>
        <footer className="footer footer-center p-4 bg-orange-600 text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
        </div>
    );
};

export default Footer;