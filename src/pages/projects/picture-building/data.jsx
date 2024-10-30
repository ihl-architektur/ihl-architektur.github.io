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
  team: '',
  company: 'PROFESSOR*IN Dipl. Arch. Philipp Schaerer',
};

export default boulderChurch;
