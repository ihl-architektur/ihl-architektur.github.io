import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './swiper.css';

const ProjectDetailView = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
      <div className="flex flex-col w-full h-full overflow-y-auto bg-white">
        <div className="flex flex-col p-4 justify-left">
          <h2 className="text-xl">{data.topline}</h2>
          <h1 className="text-3xl">{data.title.toUpperCase()}</h1>
        </div>

        {/* Set overflow-hidden only for the image carousel */}
        <div className="items-center justify-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            pagination={{ clickable: true }}
            navigation
          >
            {data?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.imageUrl} alt={image.subtitle} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Close button */}
        <button className="fixed z-50 p-2 top-4 right-4" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className="text-3xl text-secondary" />
        </button>

        {/* Scrollable content section */}
        <div className="flex-1 ">
          <div className="container p-6 mx-auto">
            <div className="flex flex-col md:flex-row">
              {/* Main text section, make sure this area is scrollable */}
              <div className="w-full p-6 md:w-2/3">
                <div dangerouslySetInnerHTML={{ __html: data.bodyText }} />
              </div>

              {/* Additional info section */}
              <div className="w-full p-6 mt-6 md:w-1/3 md:ml-6 md:mt-0">
                <ul>
                  <li className="pb-5">
                    ORT
                    <p>{data.location}</p>
                  </li>
                  <li className="pb-5">
                    GROESSE
                    <p>{data.size}</p>
                  </li>
                  <li className="pb-5">
                    STATUS
                    <p>{data.state}</p>
                  </li>
                  <li className="pb-5">
                    ZEITRAUM
                    <p>{data.timerange}</p>
                  </li>
                  <li className="pb-5">
                    LEISTUNG
                    <p>{data.service}</p>
                  </li>
                  <li className="pb-5">
                    AUFTRAGGEBER:IN
                    <p>{data.client}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
