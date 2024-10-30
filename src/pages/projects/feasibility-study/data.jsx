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
  title: 'Machbarkeitsstudie: Erweiterungsbau Musikhochschule Mannheim',
  topline: 'Mitarbeit Prof. Felix Waechter',
  bodyText:
    '<p>Die Studie ermittelt die Realisierbarkeit eines Erweiterungsbaus der Hochschule für Musik und Darstellende Kunst in Mannheim. Eine Herausforderung bietet das Grundstück: Mitten im Zentrum Mannheims gelegen, rundum von Gebäuden eingefasst, gibt es lediglich im sehr begrenzten Innenhof der Hochschule die Möglichkeit den Neubau zu realisieren. Zudem ist eine Angliederung des Erweiterungsbaus an das denkmalgeschützte Altbaugebäude gewünscht.</p><br/><p>Ein selbstbewusster Kopfbau an der nordwestlich anschließenden Straße gibt der Hochschule eine neue, präsente Adresse in der Innenstadt Mannheims. Der Baukörper entwickelt sich entlang der in die Jahre gekommenen, geschlossenen Fassade des Nachbarkomplexes bis tief in den Innenhof hinein. Dieser steht den Studenten weiterhin als Kommunikations- und Pausenfläche zur Verfügung und verknüpft alle Bereiche der Hochschule. Ein neuer großer Konzert- und Theatersaal verbindet den denkmalgeschützten Altbau mit dem Neubau unterirdisch und wird durch zwei unterschiedlich große Höfe belichtet. Der Größere eröffnet in den Sommermonaten die Möglichkeit ihn als Freilufttheater zu bespielen.</p>',
  location: 'Mannheim, Deutschland',
  type: 'Machbarkeitsstudie',
  size: '',
  state: '',
  timerange: '2018',
  performance: '',
  client: 'Vermögen und Bau Baden-Württemberg',
  team: '',
  company: 'Mitarbeit bei Prof. Felix Waechter',
};

export default boulderChurch;
