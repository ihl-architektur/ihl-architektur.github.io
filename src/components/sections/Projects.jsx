import React from 'react';

import 'swiper/css';
import boulderCurchImage from '../../assets/ownwork/01_Ihl-Architektur_BOU_Innenperspektive.jpg';
import ImageSwiper from './ImageSwiper';

const Projects = () => {
  const images = [
    {
      src: boulderCurchImage,
      link: '/projects/boulderchurch',
    },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 2' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 3' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 4' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 5' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 6' },
  ];

  const images2 = [
    { src: 'https://via.placeholder.com/300x400', link: 'Image 7' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 8' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 9' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 10' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 11' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 12' },
  ];
  const images3 = [
    { src: 'https://via.placeholder.com/300x400', link: 'Image 7' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 8' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 9' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 10' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 11' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 12' },
  ];
  const images4 = [
    { src: 'https://via.placeholder.com/300x400', link: 'Image 7' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 8' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 9' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 10' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 11' },
    { src: 'https://via.placeholder.com/300x400', link: 'Image 12' },
  ];

  return (
    <div className="container py-8 mx-auto">
      <ImageSwiper imageArray={images} />
      <ImageSwiper imageArray={images2} />
      <ImageSwiper imageArray={images3} />
      <ImageSwiper imageArray={images4} />
    </div>
  );
};

export default Projects;
