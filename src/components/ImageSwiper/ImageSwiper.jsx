import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FreeMode } from 'swiper/modules';
import './swiper.css';

const ImageSwiper = ({ imageArray }) => {
  const [hovered, setHovered] = useState(null);
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
            <div
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleProjectClick(image.link)}
            >
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="max-h-[300px] md:max-h-[400px]"
              />
              {hovered === index && (
                <div
                  className={`px-4 absolute flex-col inset-0 bg-secondary bg-opacity-80 flex items-center justify-center text-black text-center text-lg font-semibold transition-opacity duration-300 ${
                    hovered === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {image?.title?.toUpperCase()}
                  <p className="mx-4 text-sm font-normal">
                    {image?.subtitle?.toUpperCase()}
                  </p>
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
