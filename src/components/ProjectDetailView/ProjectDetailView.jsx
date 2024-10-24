import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import './swiper.css';
import { Navigation, Pagination } from 'swiper/modules';
import Container from 'utils/Container';
import { Link } from 'react-router-dom';

const ProjectDetailView = ({ data }) => {
  const swiperRef = useRef(null); // Reference to the Swiper instance

  return (
    <Container>
      {/* Close button */}
      <div className="flex flex-col w-full h-full bg-white">
        <div className="flex flex-row justify-between py-4">
          <div className="flex flex-col justify-left">
            <h2 className="text-xl">{data.topline}</h2>
            <h1 className="text-3xl">{data.title.toUpperCase()}</h1>
          </div>
          <Link className="flex" to="/">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-3xl text-secondary"
            />
          </Link>
        </div>

        {/* Set overflow-hidden only for the image carousel */}
        <div className="items-center justify-center">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            navigation={true}
            showsPagination={false}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign swiper instance to ref
            modules={[Navigation, Pagination]} // Add navigation and pagination modules
          >
            {data?.images?.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slidewide">
                <img src={image.imageUrl} alt={image.subtitle} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Scrollable content section */}
        <div className="flex">
          <div className="">
            <div className="flex flex-col md:flex-row">
              {/* Main text section, make sure this area is scrollable */}
              <div className="w-full py-6 md:w-2/3">
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
    </Container>
  );
};

export default ProjectDetailView;
