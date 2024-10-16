import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FreeMode } from 'swiper/modules';
import ProjectDetailView from './ProjectDetailView';

const ImageSwiper = ({ imageArray }) => {
  const [hovered, setHovered] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleProjectClick = (link) => {
    navigate(link);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

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
            slidesPerView: 3,
            spaceBetween: 3,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleProjectClick(image.link)}
            >
              <img src={image.src} alt={`Slide ${index + 1}`} />
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
      {selectedProject && (
        <ProjectDetailView {...selectedProject} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default ImageSwiper;
