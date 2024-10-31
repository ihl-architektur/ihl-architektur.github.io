import { importAll } from 'utils/helper';

const images = importAll(
  require.context('../../../assets/d1_feel', false, /\.(png|jpe?g|svg)$/)
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_Ihl-Architektur_01_Feel.jpg'],
      subtitle: 'Konstruktion d-surfy, Feel Festival',
    },
    {
      imageUrl: images['01_Ihl-Architektur_02_Feel.jpg'],
      subtitle: 'd-surfy, Feel Festival',
    },
    {
      imageUrl: images['01_Ihl-Architektur_03_Feel.jpg'],
      subtitle: 'd-surfy, Feel Festival',
    },
    {
      imageUrl: images['02_Ihl-Architektur_01_Dockville.jpg'],
      subtitle:
        '« Art that makes Your brain hurt. But in a good way », MS Dockville',
    },
    {
      imageUrl: images['02_Ihl-Architektur_02_Dockville.jpg'],
      subtitle:
        '« Art that makes Your brain hurt. But in a good way », MS Dockville',
    },
    {
      imageUrl: images['02_Ihl-Architektur_04_Dockville.jpg'],
      subtitle:
        '« Art that makes Your brain hurt. But in a good way », MS Dockville',
    },
    {
      imageUrl: images['02_Ihl-Architektur_05_Dockville.jpg'],
      subtitle:
        '« Art that makes Your brain hurt. But in a good way », MS Dockville',
    },

    {
      imageUrl: images['03_Ihl-Architektur_01_Bucht der Träumer.jpg'],
      subtitle: ' Speed Dating, Bucht der Träumer',
    },
  ],
  title: 'Lattemit',
  topline: 'Engagement',
  bodyText:
    '<p>Das Architekturkollektiv &apos;Lattemit&apos; entwirft und realisiert temporäre Installationen aus recycelten Holzlattenrosten, die als architektonischer sowie künsterlicher Beitrag für Kulturveranstaltungen gesucht werden. Es handelt sich um ein Zusammenschluss von handwerklich begabten und kreativen Köpfen, meist aus dem Bereich der Architektur, die Lust haben sich nebenberuflich zu engagieren, Gemeinschaft zu erleben, aus ihrem alltäglichen Umfeld herauszutreten, selbst praktisch aktiv zu werden sowie eine direkte Veränderung vor Ort mitzuerleben.</p><br/><p>Nach unzähligen filigranen Kugeln, komplexen Gyroiden, feinen Knotenpunkten und Gitterstrukturen hat in 2025 &apos;Lattemit&apos; u.a. einen Stopp auf dem MS Dockville Hafengelände in Hamburg gemacht. Diesmal waren dabei - mehr als 2 km Latten, 1000 Schrauben und neue Dimensionen. Die Vorliebe bleibt für periodische Geometrie, puristische Materialien und absolute Verwirrung treu und fest bestehen. Rechteckige Querschnitte, die sich zur fluiden Form vereinen, Lichtdurchlässigkeit und doch solide Ansichten.</p><br/><p>Art that makes your brain hurt.</p><p>But in a good way.</p><br/><p>Instagram:</p><p>www.instagram.com/lattemit/</p><br/><p>Artikel:</p><p>www.zeit.de/news/2024-08/17/miteinander-einfach-gluecklich-dockville-in-wilhelmsburg</p>',
  location: 'MS Dockville | Feel Festival | Bucht der Träumer, Deutschland',
  type: '',
  size: '',
  state: 'Realisiert',
  timerange: '2024',
  performance: '',
  client: '',
  team: '',
  company: '',
};

export default boulderChurch;
