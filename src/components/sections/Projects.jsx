import React from 'react';

import 'swiper/css';
import boulderChurch from '../../data/boulderChurch/boulderChurch';

import ImageSwiper from './ImageSwiper';

const Projects = () => {
  // Hier Bilder einfügen
  const images = [
    {
      src: 'https://via.placeholder.com/300x350',
      title: 'BoulderChurch',
      data: boulderChurch,
    },
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
