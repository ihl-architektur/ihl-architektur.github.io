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
  title: "Wohnungsbau 'Forms of Living'",
  topline: 'Entwurf EPFL',
  bodyText:
    '<p>Dieser Wohnungsbau beschäftigt sich mit der Untersuchung von alternativen räumlichen Konfigurationen, die ein neues Verständnis von der Beziehung zwischen Raum und Funktion aufzeigen. Dabei soll frei von Konventionen eine spezifische und individuelle Vorstellung von „zu Hause“ den Entwurf definieren. Der Entwurf sollte auf einem frei gewähltem Grundstück im Stadtkern von Lausanne platziert werden:</p><br/><p>Eine bewohnte Treppe charakterisiert das Konzept dieser Wohnung. In verschiedenen Intervallen und Entfernungen entlang des Aufstiegs oder Abstiegs, erweitert sich die Treppe zu Ebenen mit unterschiedlichen Höhen und Breiten.</p><p>Durch die Verdrehung im Stufenverlauf, den Winkel des Auftritts, die Tiefe der Laufflächen und die Anzahl der Steigungen; wird eine Reihe von wechselnden kommunalen und privaten Zonen gebildet. Diese unterschiedlichen Bereiche der Wohnung sind nicht klar voneinander getrennt, sondern können sich überlappen. Die offene Beziehung zwischen den Ebenen schafft eine kontinuierliche Zirkulation und ein dynamisches Raumsystem. Die besondere Gestalt der Treppe bietet den Bewohnern Raum, der Wohnen und Durchschreiten eins werden lässt.</p>',
  location: 'Lausanne, Schweiz',
  type: 'Entwurf EPFL',
  size: '',
  state: '',
  timerange: 'Wintersemester 2015|16',
  performance: '',
  client: '',
  team: '',
  company: 'PROFESSOR*IN Prof. Christian Müller Inderbitzin',
};

export default boulderChurch;