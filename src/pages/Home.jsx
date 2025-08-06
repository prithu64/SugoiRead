import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Intro from '../components/sections/Intro';

function Home() {
  return (
    <div className="flex justify-center items-center py-16 px-4 md:px-20  ">
      <div className="w-full max-w-3xl text-center border rounded-tr-4xl rounded-bl-4xl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 6000,
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
            <section className="flex justify-center items-center h-60 text-white text-2xl font-semibold">
              Slide 2: New Arrivals!
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="flex justify-center items-center h-60 text-white text-2xl font-semibold">
              Slide 3: Weekly Picks
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="flex justify-center items-center h-60 text-white text-2xl font-semibold">
              Slide 4: Submit Your Favorites
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
