import React from 'react';

import 'swiper/css';
import projectsA1 from '../../assets/projects-a/01_Ihl-Architektur_BOU_Innenperspektive.jpg';
import projectsA2 from '../../assets/projects-a/02_Ihl-Architektur_BOU_Erdgeschoss.jpg';
import projectsA3 from '../../assets/projects-a/03_Ihl-Architektur_BOU_Foto Chorbereich.jpg';
import projectsA4 from '../../assets/projects-a/04_Ihl-Architektur_BOU_Emporenebene.jpg';
import projectsA5 from '../../assets/projects-a/05_bad-orb-st-michael3-bild-Jörg-Braukmann-cc-by-sa-4.0-2020.jpg';

import projectsB1 from '../../assets/projects-b/01_hparc_FKS_Gemälde Bestand.jpg';
import projectsB2 from '../../assets/projects-b/02_hparc_IKA_Innenraumperspektive.jpg';
import projectsB3 from '../../assets/projects-b/03_Prof. Felix Waechter_Machbarkeitsstudie Mannheim_Modellfoto.jpg';
import projectsB4 from '../../assets/projects-b/04_W+W_Tapetenmuseum Kassel_Wettbewerb.jpg';
import projectsB5 from '../../assets/projects-b/05_Dreier Frenzel_Immeuble Verdeaux Renens_Innenraum.jpg';

import projectsC1 from '../../assets/projects-c/01_Masterthesis_Flamenco-Schule_Perspektive-Modell-Hof.jpg';
import projectsC2 from '../../assets/projects-c/02_Wohnungsbau_Forms-of-Living.jpg';
import projectsC3 from '../../assets/projects-c/03_Fachmodul_Pausa---Ort-der-inneren-Einkehr.jpg';
import projectsC4 from '../../assets/projects-c/04_Fachmodul_Bildbauten.jpg';

import projectsD1 from '../../assets/projects-d/01_Architekturkollektiv_Lattemit.jpg';
import projectsD2 from '../../assets/projects-d/02_Thusanang_Soziales-Projekt.jpg';
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
    { src: projectsB1, link: '/projects/fortress' },
    { src: projectsB2, link: '/projects/nikolai-chruch' },
    { src: projectsB3, link: 'Image 9' },
    { src: projectsB4, link: 'Image 10' },
    { src: projectsB5, link: 'Image 11' },
  ];
  const images3 = [
    { src: projectsC1, link: 'Image 7' },
    { src: projectsC2, link: 'Image 8' },
    { src: projectsC3, link: 'Image 9' },
    { src: projectsC4, link: 'Image 10' },
  ];
  const images4 = [
    { src: projectsD1, link: 'Image 7' },
    { src: projectsD2, link: 'Image 8' },
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
