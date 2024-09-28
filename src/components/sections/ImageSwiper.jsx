import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

import { FreeMode } from 'swiper/modules';

const ImageSwiper = ({ imageArray }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="py-1 cotnainer">
      <Swiper
        spaceBetween={8}
        slidesPerView={3}
        slidesPerGroup={3}
        modules={[FreeMode]}
        loop={true}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
              {hovered === index && (
                <div
                  className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300 ${
                    hovered === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {image.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
