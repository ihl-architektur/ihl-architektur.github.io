import React from 'react';

import 'swiper/css';
import projectsA1 from '../assets/projects-a/01_Ihl-Architektur_BOU_Innenperspektive.jpg';
import projectsA2 from '../assets/projects-a/02_Ihl-Architektur_BOU_Erdgeschoss.jpg';
import projectsA3 from '../assets/projects-a/03_Ihl-Architektur_BOU_Foto Chorbereich.jpg';
import projectsA4 from '../assets/projects-a/04_Ihl-Architektur_BOU_Emporenebene.jpg';
import projectsA5 from '../assets/projects-a/05_bad-orb-st-michael3-bild-Jörg-Braukmann-cc-by-sa-4.0-2020.jpg';

import projectsB1 from '../assets/projects-b/01_hparc_FKS_Gemälde Bestand.jpg';
import projectsB2 from '../assets/projects-b/02_hparc_IKA_Innenraumperspektive.jpg';
import projectsB3 from '../assets/projects-b/03_Prof. Felix Waechter_Machbarkeitsstudie Mannheim_Modellfoto.jpg';
import projectsB4 from '../assets/projects-b/04_W+W_Tapetenmuseum Kassel_Wettbewerb.jpg';
import projectsB5 from '../assets/projects-b/05_Dreier Frenzel_Immeuble Verdeaux Renens_Innenraum.jpg';

import projectsC1 from '../assets/projects-c/01_Masterthesis_Flamenco-Schule_Perspektive-Modell-Hof.jpg';
import projectsC2 from '../assets/projects-c/02_Wohnungsbau_Forms-of-Living.jpg';
import projectsC3 from '../assets/projects-c/03_Fachmodul_Pausa---Ort-der-inneren-Einkehr.jpg';
import projectsC4 from '../assets/projects-c/04_Fachmodul_Bildbauten.jpg';

import projectsD1 from '../assets/projects-d/01_Architekturkollektiv_Lattemit.jpg';
import projectsD2 from '../assets/projects-d/02_Architekturkollektiv_Lattemit.jpg';
import projectsD3 from '../assets/projects-d/03_Architekturkollektiv_Lattemit.jpg';
import projectsD4 from '../assets/projects-d/02_Thusanang_Soziales-Projekt.jpg';
import ImageSwiper from 'components/ImageSwiper/ImageSwiper';

const Projects = () => {
  const images = [
    {
      src: projectsA1,
      title: 'Boulderhalle',
      subtitle: 'Eigenes Projekt',
      link: '/projects/boulderchurch',
    },
    {
      src: projectsA2,
      title: 'Boulderhalle',
      subtitle: 'Eigenes Projekt',
      link: '/projects/boulderchurch',
    },
    {
      src: projectsA3,
      title: 'Boulderhalle',
      subtitle: 'Eigenes Projekt',
      link: '/projects/boulderchurch',
    },
    {
      src: projectsA4,
      title: 'Boulderhalle',
      subtitle: 'Eigenes Projekt',
      link: '/projects/boulderchurch',
    },
    {
      src: projectsA5,
      title: 'Boulderhalle',
      subtitle: 'Eigenes Projekt',
      link: '/projects/boulderchurch',
    },
  ];

  const images2 = [
    {
      src: projectsB1,
      title: 'Museum Kaserne Königstein',
      subtitle: 'Mitarbeit hparc',
      link: '/projects/fortress',
    },
    {
      src: projectsB2,
      title: 'Lilienthal Flug Museum',
      subtitle: 'Mitarbeit hparc',
      link: '/projects/nikolai-chruch',
    },
    {
      src: projectsB3,
      title: 'Machbarkeitsstudie',
      subtitle: 'Mitarbeit Prof. Waechter',
      link: '/projects/feasibility-study',
    },
    {
      src: projectsB4,
      title: 'Wettbewerb',
      subtitle: 'Mitarbeit W+W Architekten',
      link: '/projects/competition',
    },
    {
      src: projectsB5,
      title: 'Wohnungsbau',
      subtitle: 'Mitarbeit Dreier Frenzel Architektur',
      link: '/projects/renes',
    },
  ];
  const images3 = [
    {
      src: projectsC1,
      title: 'Masterthesis',
      subtitle: 'Ausbildung TU Darmstadt',
      link: '/projects/master',
    },
    {
      src: projectsC2,
      title: 'Entwurf',
      subtitle: 'Ausbildung EPFL',
      link: '/projects/epfl',
    },
    {
      src: projectsC3,
      title: 'Fachmodul',
      subtitle: 'Ausbildung TU Darmstadt',
      link: '/projects/hiking-house',
    },
    {
      src: projectsC4,
      title: 'Bildbauten',
      subtitle: 'Ausbildung EPFL',
      link: '/projects/picture-building',
    },
  ];
  const images4 = [
    {
      src: projectsD1,
      title: 'Lattemit',
      subtitle: 'Engagement Architekturkollektiv',
      link: '/projects/lattemit',
    },
    {
      src: projectsD2,
      title: 'Lattemit',
      subtitle: 'Engagement Architekturkollektiv',
      link: '/projects/lattemit',
    },
    {
      src: projectsD3,
      title: 'Lattemit',
      subtitle: 'Engagement Architekturkollektiv',
      link: '/projects/lattemit',
    },
    {
      src: projectsD4,
      title: 'Thusanang',
      subtitle: 'Engagement Soziales Projekt',
      link: '/projects/social-project',
    },
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
