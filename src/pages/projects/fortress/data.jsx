import { importAll } from 'utils/helper';

const images = importAll(
  require.context('../../../assets/b1_fortress', false, /\.(png|jpe?g|svg)$/)
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_hparc_FKS_Gemälde.jpg'],
      subtitle: 'Gemälde, E.F. v. Oehme (1797-1855)',
    },
    {
      imageUrl: images['02_hparc_FKS_Festungsgelände Isometrie.jpg'],
      subtitle: 'Festungsgelände Isometrie, Peter Mauksch',
    },
    {
      imageUrl: images['03_hparc_FKS_Nutzungsverteilung Isometrie.jpg'],
      subtitle: 'Nutzungsverteilung Isometrie © hparc',
    },
    {
      imageUrl: images['04_hparc_FKS_Ansicht Musterfassade.jpg'],
      subtitle: 'Ansicht Musterfassade © hparc',
    },
    {
      imageUrl: images['05_hparc_FKS_Musterfassade.jpg'],
      subtitle: 'Musterfassade',
    },
  ],
  title: 'Museum Alte Kaserne, Festung Königstein',
  topline: 'Mitarbeit heneghan peng architects',
  bodyText:
    '<p>Die Alte Kaserne auf der Festung Königstein soll grundlegend saniert werden. Dabei handelt es sich nicht nur um eine rein technische und statisch-konstruktive Ertüchtigung des Gebäudes. Vielmehr geht es um das Erarbeiten eines respektvollen architektonischen Gesamtkonzeptes, bei dem die Funktionen im Kontext des denkmalgeschützten Bestandsgebäudes neu gedacht werden und dem Gebäude eine langfristige Nutzungsperspektive zugeführt werden kann: </p><br/><p>Im ältesten erhaltenen Kasernengebäude (1588/89) Deutschlands sind Museumsshop, Gastronomie sowie Neben- und Serviceräume untergebracht. Im Zuge der Sanierung werden Ausstellungsbereiche und Flächen für die Museumspädagogik ergänzt und nach funktionalen und denkmalpflegerischen Anforderungen neu geordnet. Schwerpunkt des Konzeptes ist ein minimaler Eingriff in die bestehende denkmalgeschützte Bausubstanz sowie die Adressbildung der unterschiedlichen Nutzungen durch die vorhandene dominante Struktur des Gebäudes, insbesondere hinsichtlich Öffnungen und Zugängen. In diesem Sinne wird die Klarheit der Struktur des Gebäudes, welche über die vielen Umnutzungen und Eingriffe im Laufe der Zeit verloren gegangen ist, wieder geschärft, um dadurch die Lesbarkeit der strengen und rigiden Bestandsstruktur des Kasernengebäudes und den damit einhergehenden militärischen Charakter stärker sichtbar werden zu lassen.</p>',
  location: 'Königstein, Deutschland',
  type: 'Denkmalgerechte Sanierung, Neustrukturierung Ausstellungsfläche ',
  size: '5.300 m² BGF',
  state: 'in Realisierung',
  timerange: '2019-2020',
  performance: 'LPH 5',
  client: 'SIB Dresden ',
  team: '',
  company: 'Projektarchitektin bei hparc',
};

export default boulderChurch;
