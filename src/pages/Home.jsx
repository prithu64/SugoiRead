import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Intro from '../components/sections/Intro';
import IntroTwo from '../components/sections/IntroTwo';
import IntroThree from '../components/sections/IntroThree';
import { useState } from 'react';
import SuggestModal from '../components/SuggestModal';


function Home() {
  const [modal ,setModal] = useState(false)
  return (
    <div className="flex justify-center items-center  px-4 md:px-20 my-5">
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
          preventClicks={false}          
          preventClicksPropagation={false}
          >
           
           <SwiperSlide>
           <Intro/>
          </SwiperSlide>

          <SwiperSlide>
           <IntroTwo/>
          </SwiperSlide>

          <SwiperSlide>
           <IntroThree setModal={setModal} modal={modal}/>
          </SwiperSlide>
          

        </Swiper>
        <SuggestModal modal={modal} setModal={setModal}/>
      </div>
    </div>
  );
}

export default Home;
