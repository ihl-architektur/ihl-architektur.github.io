import React from 'react';

import 'swiper/css';
import projectsA1 from '../../assets/projects-a/01_Ihl-Architektur_BOU_Innenperspektive.jpg';
import projectsA2 from '../../assets/projects-a/02_Ihl-Architektur_BOU_Erdgeschoss.jpg';
import projectsA3 from '../../assets/projects-a/03_Ihl-Architektur_BOU_Foto Chorbereich.jpg';
import projectsA4 from '../../assets/projects-a/04_Ihl-Architektur_BOU_Emporenebene.jpg';
import projectsA5 from '../../assets/projects-a/05_bad-orb-st-michael3-bild-Jörg-Braukmann-cc-by-sa-4.0-2020.jpg';

import projectsB1 from '../../assets/projects-b/01_hparc_FKS_Gemälde Bestand.jpg';
import projectsA2 from '../../assets/projects-a/02_Ihl-Architektur_BOU_Erdgeschoss.jpg';
import projectsA3 from '../../assets/projects-a/03_Ihl-Architektur_BOU_Foto Chorbereich.jpg';
import projectsA4 from '../../assets/projects-a/04_Ihl-Architektur_BOU_Emporenebene.jpg';
import projectsA5 from '../../assets/projects-a/05_bad-orb-st-michael3-bild-Jörg-Braukmann-cc-by-sa-4.0-2020.jpg';

import ImageSwiper from './ImageSwiper';

const Projects = () => {
  const images = [
    {
      src: projectsA1,
      link: '/projects/boulderchurch',
    },
    { src: projectsA2, link: 'Image 2' },
    { src: projectsA3, link: 'Image 3' },
    { src: projectsA4, link: 'Image 4' },
    { src: projectsA5, link: 'Image 5' },
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
