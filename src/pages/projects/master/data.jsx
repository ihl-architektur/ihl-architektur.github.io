import { importAll } from 'utils/helper';

const images = importAll(
  require.context('../../../assets/c1_master', false, /\.(png|jpe?g|svg)$/)
);

const boulderChurch = {
  images: [
    {
      imageUrl:
        images['01_Isabelle Ihl Architektur_Masterthesis_Modellfoto Hof.jpg'],
      subtitle: 'Innenperspektive',
    },
    {
      imageUrl: images['03_Isabelle Ihl Architektur_Masterthesis_Lageplan.jpg'],
      subtitle: 'Innenperspektive belebt',
    },
    {
      imageUrl:
        images[
          '04_Isabelle Ihl Architektur_Masterthesis_Grundriss Erdgeschoss.jpg'
        ],
      subtitle: 'Grundriss Erdgeschoss',
    },
    {
      imageUrl:
        images[
          '05_Isabelle Ihl Architektur_Masterthesis_Grundriss Obergeschoss.jpg'
        ],
      subtitle: 'Grundriss Emporenebene',
    },
    {
      imageUrl: images['06_Isabelle Ihl Architektur_Masterthesis_Schnitt.jpg'],
      subtitle: 'Grundriss Emporenebene',
    },
  ],
  title: 'Flamencoschule',
  topline: 'Masterthesis, TU Darmstadt',
  bodyText:
    '<p>Die Entwurfsaufgabe sah den Neubau einer professionellen Flamencoschule in der Altstadt Sevillas vor, in der die drei Bestandteile des Flamenco – Tanz, Gesang und Gitarrenspiel – unterrichtet und dargeboten werden sollen. Die inhaltliche Auseinandersetzung mit den für den Flamenco typischen Themen Bewegung, Klang, Inszenierung und Präsentation sollte sowohl funktional, als auch sinnlich in eine räumliche Ausprägung überführt werden. Darüber hinaus sollte sich das Gebäude angemessen zum Stadtraum hin präsentieren und vor dem extrem heißen Stadtklima Sevillas geschützt werden.</p><br/><p>Der Entwurf definiert sich über drei Baukörper, die durch eine Sequenz von Außenräumen voneinander separiert sind. Über visuelle Bezüge und die Kontinuität der Materialien fügen die drei Volumen sich zu einem harmonischen Ensemble. Öffentliche und repräsentative Funktionen der Schule sind in einem dominanten, dem Stadtraum zugewandten, Baukörper untergebracht. Dieser ist nach hinten versetzt, wodurch eine neue Platzsituation mit gesteigerter Aufenthaltsqualität entsteht. Der Vorplatz verengt sich zu einem schmalen Zwischenraum, über den man am Schulgebäude entlang zu einem intimeren, verschatteten Hof geleitet wird. Dieser Freiraum wird durch ein Café mit Ausstellung bespielt, das sich im dritten Gebäudevolumen befindet.</p><p>Durch die geschickte Positionierung der Gebäude auf dem verwinkelten Grundstück entsteht eine spannungsvolle Abfolge enger und weiter Außenräume mit hoher Aufenthaltsqualität – wie Tanzende schmiegen und lehnen sich die Baukörper aneinander und treten in Beziehung zum Stadtraum.</p>',
  location: 'Sevilla, Spanien',
  type: 'Masterthesisentwurf (Auszeichnung)',
  size: '',
  state: '',
  timerange: 'Wintersemester 2017|18',
  performance: '',
  client: '',
  team: '',
  company: 'PROFESSOR*IN Prof. Anett-Maud Joppien',
};

export default boulderChurch;
