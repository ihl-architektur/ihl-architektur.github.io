import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

import { FreeMode } from 'swiper/modules';
import ImageSwiper from './ImageSwiper';

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  // Sample images array with titles
  const images = [
    { src: 'https://via.placeholder.com/300x350', title: 'Image 1' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 2' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 3' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 4' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 5' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 6' },
  ];
    
  const images2 = [
    { src: 'https://via.placeholder.com/300x350', title: 'Image 7' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 8' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 9' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 10' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 11' },
    { src: 'https://via.placeholder.com/300x350', title: 'Image 12' },
  ];

  return (
    <div className="container py-8 mx-auto">
          <ImageSwiper imageArray={images} />
          <ImageSwiper imageArray={images2} />
    </div>
  );
};

export default Projects;
