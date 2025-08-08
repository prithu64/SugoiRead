import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Intro from '../components/sections/Intro';
import IntroTwo from '../components/sections/IntroTwo';
import IntroThree from '../components/sections/IntroThree';

function Home() {
  return (
    <div className="flex justify-center items-center py-16 px-4 md:px-20  ">
      <div className="w-full max-w-6xl text-center  shadow-2xl rounded-2xl overflow-hidden shadow-gray-800 dark:shadow-gray-500">
        <Swiper  
          modules={[Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          simulateTouch={true}
          grabCursor={true}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
           <Intro/>
          </SwiperSlide>

          <SwiperSlide>
            <IntroTwo />
          </SwiperSlide>

          <SwiperSlide>
            <IntroThree/>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

export default Home;
