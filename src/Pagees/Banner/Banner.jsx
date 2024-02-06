import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img from '../../assets/Banner.png'
const Banner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
       
      </Swiper>
    );
};

export default Banner;