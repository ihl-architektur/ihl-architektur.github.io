import { importAll } from 'utils/helper';

const images = importAll(
  require.context(
    '../../../assets/b2_nikolai-church',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_hparc_IKA_Innenperspektive.jpg'],
      subtitle: 'Perspektive Innenraum © hparc',
    },
    {
      imageUrl: images['02_hparc_IKA_Lageplan.jpg'],
      subtitle: 'Lageplan © hparc',
    },
    {
      imageUrl: images['03_hparc_IKA_Grundriss Erdgeschoss.jpg'],
      subtitle: 'Grundriss Erdgeschoss © hparc',
    },
    {
      imageUrl: images['04_hparc_IKA_Grundriss Obergeschoss.jpg'],
      subtitle: 'Grundriss Obergeschoss © hparc',
    },
    {
      imageUrl: images['05_hparc_IKA_Schnitt.jpg'],
      subtitle: 'Schnitt © hparc',
    },
  ],
  title: 'Lilienthal Flug Museum',
  topline: 'Mitarbeit heneghan peng architects',
  bodyText:
    '<p>Die Nikolaikirche soll in mehreren Schritten zum &apos;Lilienthal Flug Museum&apos; ausgebaut werden. Dies beinhaltet parallel zur Wiederherstellung des Turmhelms, das Kirchengebäude denkmalgerecht zu sanieren, neue Ausstellungsflächen als Einbauten in den Bestand zu integrieren und einen Ergänzungsbau als Eingangsgebäude zum Museum zu realisieren.</p><br/><p>Der Schutz dieses Denkmals und das Errichten neuer Bauten in zeitgenössischer Formensprache bilden keine gegensätzlichen Themen, sondern treten in Zusammenhang zueinander auf. Die Nikolaikirche greift die spannende Dialektik dieser zwei Themen in ihrer Architektur auf und möchte sie erlebbar machen.</p><br/><p>Die Realisierung des &apos;Lilienthal Flug Museum&apos; in der wiederhergestellten Nikolaikirche in Anklam, der Taufkirche Otto Lilienthals, stellt den ersten wesentlichen Teil der Aufgabe dar: Um Zeugnis über die Geschichte seiner Backsteingotik, bis hin zu Zerstörung und Wiederaufbau abzulegen, wird das nördliche Seitenschiff der Nikolaikirche freigehalten. Es bildet in seine Unberührtheit einen Gegenpol zum südlichen Seitenschiff. Hier befinden sich neue Einbauten für die Ausstellung, welche das Volumen der Kirche verändern und neu interpretieren. Das Mittelschiff fungiert als Zwischenraum und Bindeglied der Raumstruktur. Diese Strategie ermöglicht das Betrachten der Nikolaikirche nicht nur in der Vergangenheit, sondern erlaubt auch Blicke in die Zukunft.</p>',
  location: 'Nikolaikirche Anklam, Deutschland',
  type: 'Denkmalgerechte Sanierung, Erweiterung Ausstellungsfläche',
  size: 'Kirche 2.800 m² | Anbau 1.500 m² BGF',
  state: 'in Realisierung',
  timerange: '2020-2022',
  performance: 'LPH 2-3, Teilbereiche 4, 5',
  client: 'Hansestadt Anklam',
  team: '',
  company: 'Projektarchitektin bei hparc',
};

export default boulderChurch;
