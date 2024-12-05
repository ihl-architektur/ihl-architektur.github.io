import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { FreeMode } from 'swiper/modules';
import './swiper.css';

const ImageSwiper = ({ imageArray }) => {
  const navigate = useNavigate();

  const handleProjectClick = (link) => {
    navigate(link);
  };

  return (
    <div className="py-1 cotnainer">
      <Swiper
        spaceBetween={8}
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => handleProjectClick(image.link)}>
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="max-h-[300px] md:max-h-[400px]"
                loading="lazy"
              />

              <div
                className={`px-4 absolute flex-col inset-0 bg-secondary bg-opacity-80 opacity-0 flex items-center justify-center text-black text-center text-lg font-semibold transition-opacity duration-300 lg:hover:opacity-100`}
              >
                {image?.title?.toUpperCase()}
                <p className="mx-4 text-sm font-normal select-none">
                  {image?.subtitle?.toUpperCase()}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
