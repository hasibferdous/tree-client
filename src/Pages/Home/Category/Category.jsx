import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/slide10.jpg"
import slide2 from "../../../assets/slide02.jpg"
import slide3 from "../../../assets/slide03.jpg"
import slide4 from "../../../assets/slide04.jpg"
import slide5 from "../../../assets/slide05.jpg"
import slide6 from "../../../assets/slide06.jpg"
import slide7 from "../../../assets/slide07.jpg"
import slide8 from "../../../assets/slide08.jpg"
import slide9 from "../../../assets/slide09.jpg"
import SectionTitle from '../../../components/SectionTilte/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Order in-between 07:00 am to 09:00 pm"}
                heading={"Order Now"}
            ></SectionTitle>

        <Swiper
        slidesPerView={4}
        spaceBetween={-300}
        centeredSlides={true}
        pagination={{
          clickable: true,
        
        }}
        modules={[Pagination]}
        className="mySwiper  mt-16 mb-24"
      >
        <SwiperSlide>
            <img className='h-80 w-60' src={slide1} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide2} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide3} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide4} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide5} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide6} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide7} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide8} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-80 w-60' src={slide9} alt=''/>
            <h3 className='text-3xl text-center -ml-80 -mt-16 font-bold shadow-2xl '>Cactus</h3>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};
export default Category;
