import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectDetailView = ({
  title,
  subtitle,
  images,
  htmlContent,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="flex flex-col w-full h-full bg-white">
        <div className="flex flex-col items-center justify-center p-4 border-b">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-xl text-gray-600">{subtitle}</h2>
        </div>

        <div className="flex items-center justify-center flex-1 overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-full"
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-end p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>

        <div className="p-4 overflow-y-auto bg-white">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
