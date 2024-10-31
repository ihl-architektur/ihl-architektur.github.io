import { importAll } from 'utils/helper';

const images = importAll(
  require.context(
    '../../../assets/d2_SocialProject',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_Thusanang.jpg'],
      subtitle: 'Innenperspektive',
    },
    {
      imageUrl: images['02_Thusanang.jpg'],
      subtitle: 'Innenperspektive belebt',
    },
    {
      imageUrl: images['03_Thusanang.jpg'],
      subtitle: 'Grundriss Erdgeschoss',
    },
    {
      imageUrl: images['04_Thusanang.jpg'],
      subtitle: 'Grundriss Emporenebene',
    },
    {
      imageUrl: images['05_Thusanang.jpg'],
      subtitle: 'Grundriss Emporenebene',
    },
    {
      imageUrl: images['06_Thusanang.jpg'],
      subtitle: 'Grundriss Emporenebene',
    },
    {
      imageUrl: images['07_Thusanang.jpg'],
      subtitle: 'Grundriss Emporenebene',
    },
  ],
  title: 'Thusanang',
  topline: 'Engagement',
  bodyText:
    '<p>Thusanang ist ein gemeinnütziges Bauvorhaben im kleinen Dorf Venture in Südafrika. In Zusammenarbeit mit einem Team vor Ort entsteht seit 2020 das erste Gebäude der geplanten Struktur: ein Gemeinschaftszentrum aus Lehmsteinen. Waisenhäuser, Kindergarten sowie Koch- und Waschräume sollen folgen.</p><br/><p>Webseite:</p><p>www.thusanang.de</p>',
  location: 'Venture, Südafrika',
  type: '',
  size: '',
  state: 'in Realisierung',
  timerange: 'Mitarbeit vor Ort - Februar 2020',
  performance: '',
  client: '',
  team: '',
  company: '',
};

export default boulderChurch;
