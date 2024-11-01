import { importAll } from 'utils/helper';

const images = importAll(
  require.context(
    '../../../assets/c4_picturebuilding',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_Isabelle Ihl Architektur_Bildbauten.jpg'],
      subtitle: '',
    },
    {
      imageUrl: images['02_Isabelle Ihl Architektur_Bildbauten.jpg'],
      subtitle: '',
    },
    {
      imageUrl: images['03_Isabelle Ihl Architektur_Bildbauten.jpg'],
      subtitle: '',
    },
    {
      imageUrl: images['04_Isabelle Ihl Architektur_Bildbauten.jpg'],
      subtitle: '',
    },
  ],
  title: 'Bildbauten',
  topline: 'Digitale Montagetechnik',
  bodyText:
    '<p>Diese Bilderserie beschäftigt sich mit der Wirkung und dem Glaubwürdigkeitsanspruch fotografisch anmutender Architekturabbildungen. Als Beispiel dienen Frontalansichten frei erfundener Architekturen. Durch ihre überspitzte und inszenierte Darstellung orientieren sie sich nicht unironisch an der Objekthaftigkeit und der formalen Sprache zeitgenössischer Architektur. Alle Bilder versuchen eine Wirklichkeit wiederzugeben, sind aber nicht fotografisch entstanden, sondern mittels Bildsynthese und digitaler Montagetechniken, von Grund auf neu entworfen und konstruiert worden.</p>',
  location: '',
  type: 'Seminar',
  size: '',
  state: '',
  timerange: 'Wintersemester 2015|16',
  performance: '',
  client: '',
  prof: 'Dipl. Arch. Philipp Schaerer',
  team: '',
  company: '',
};

export default boulderChurch;
