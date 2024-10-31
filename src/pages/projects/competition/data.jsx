import { importAll } from 'utils/helper';

const images = importAll(
  require.context('../../../assets/b4_competition', false, /\.(png|jpe?g|svg)$/)
);

const boulderChurch = {
  images: [
    {
      imageUrl:
        images['01_W+W_Tapetenmuseum Kassel_Wettbewerb_Außenperspektive.jpg'],
      subtitle: 'Außenperspektive',
    },
    {
      imageUrl: images['02_W+W_Tapetenmuseum Kassel_Wettbewerb_Grundriss.jpg'],
      subtitle: 'Grundriss Erdgeschoss',
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
  title: 'Wettbewerb: Neubau Deutsches Tapetenmuseum Kassel',
  topline: 'Mitarbeit Waechter + Waechter Architekten BDA',
  bodyText:
    '<p>Ziel des Wettbewerbes war die Planung eines Neubaus, welcher neben der Konzeption eines modernen Museumsbaus die stimmige Integration von teilweise denkmalgeschützten Bestandsgebäuden in das Museumskonzept beinhaltet. .</p><br/><p>Ebenerdig wird das Museum an der Schnittstelle zwischen Torwache und Neubau erschlossen. Großzügig öffnet sich die Eingangshalle über zwei Ebenen und damit weithin sichtbar zum Platz. Besucher betreten alle gleichberechtigt das Foyer und blicken gegenüberliegend in den ergänzten Park. Unmittelbar auf der Foyerebene schließen die Ausstellungsräume im Erdgeschoss an; eine polygonale Deckenöffnung in der Gebäudeecke eröffnet Einblicke in die obere bzw. von oben in die untere Ausstellung, weckt Neugierde zum Weitgehen, ermöglicht aber auch, großformatige Tapeten auszustellen.</p>',
  location: 'Kassel, Deutschland',
  type: 'Wettbewerb (Anerkennung)',
  size: '',
  state: '',
  timerange: '2017',
  performance: '',
  client: 'Landesbetrieb Bau u. Immobilien Hessen',
  team: '',
  company: 'Werkstudentin bei Waechter + Waechter Architekten BDA',
};

export default boulderChurch;
