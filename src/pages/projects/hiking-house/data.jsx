import { importAll } from 'utils/helper';

const images = importAll(
  require.context(
    '../../../assets/a_boulderchurch',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_Ihl-Architektur_BOU_Innenperspektive.jpg'],
      subtitle: 'Innenperspektive',
    },
    {
      imageUrl: images['02_Ihl-Architektur_BOU_Innenperspektive_belebt.jpg'],
      subtitle: 'Innenperspektive belebt',
    },
    {
      imageUrl: images['03_Ihl-Architektur_BOU_Erdgeschoss.jpg'],
      subtitle: 'Grundriss Erdgeschoss',
    },
    {
      imageUrl: images['04_Ihl-Architektur_BOU_Emporenebene.jpg'],
      subtitle: 'Grundriss Emporenebene',
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
