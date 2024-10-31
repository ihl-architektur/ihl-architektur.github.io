import { importAll } from 'utils/helper';

const images = importAll(
  require.context('../../../assets/c3_hikinghouse', false, /\.(png|jpe?g|svg)$/)
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_Isabelle Ihl Architektur_Fachmodul_Modellfoto.jpg'],
      subtitle: 'Modellfoto',
    },
    {
      imageUrl: images['02_Isabelle Ihl Architektur_Fachmodul_Grundriss.jpg'],
      subtitle: 'Grundriss',
    },
    {
      imageUrl: images['03_Isabelle Ihl Architektur_Fachmodul_Schnitt.jpg'],
      subtitle: 'Schnitt',
    },
  ],
  title: "'Pausa - Ort der inneren Einkehr'",
  topline: 'Fachmodul TU Darmstadt',
  bodyText:
    '<p>Die Aufgabe des Fachmoduls sah vor, einen Kontrapunkt zum Publikumsmagneten Felsenmeer zu setzen und einen Ort der inneren Einkehr zu schaffen.</p><br/><p>Auf dem Höhenrundweg am Felsenmeer lässt sich so manche Landmarke erwandern. Diesem galt es eine weitere Perle hinzuzufügen. Eine kleine Intervention. Ein Einraum. Ein kleines Gebäude an dem man sich ausruht, rastet, eine Pause macht.</p>',
  location: 'Lautertal (Odenwald), Deutschland',
  type: 'Fachmodulentwurf',
  size: '',
  state: '',
  timerange: 'Sommersemester 2017',
  performance: '',
  client: '',
  team: '',
  company: 'PROFESSOR*IN Dipl.-Ing. Joachim Raab',
};

export default boulderChurch;
