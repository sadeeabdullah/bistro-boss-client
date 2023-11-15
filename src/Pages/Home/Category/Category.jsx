import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// importing images from the assest folder

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am  to 10.00pm"}
            heading={"Order Online"}>
                
            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className='text-4xl text-center -mt-16 text-white shadow-2xl uppercase'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className='text-4xl text-center -mt-16 text-white shadow-2xl uppercase'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-4xl text-center -mt-16 text-white shadow-2xl uppercase'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-4xl text-center -mt-16 text-white shadow-2xl uppercase'>deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className='text-4xl text-center -mt-16 text-white shadow-2xl uppercase'>Salads</h3>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;