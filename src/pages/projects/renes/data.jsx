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
      subtitle: 'Innenperspektive © Dreier Frenzel',
    },
    {
      imageUrl: images['02_Ihl-Architektur_BOU_Innenperspektive_belebt.jpg'],
      subtitle: 'Innenperspektive belebt © Dreier Frenzel',
    },
    {
      imageUrl: images['03_Ihl-Architektur_BOU_Erdgeschoss.jpg'],
      subtitle: 'Grundriss Erdgeschoss © Dreier Frenzel',
    },
    {
      imageUrl: images['04_Ihl-Architektur_BOU_Emporenebene.jpg'],
      subtitle: 'Grundriss Emporenebene © Dreier Frenzel',
    },
  ],
  title: 'Wohnungsbau: Immeuble Verdeaux',
  topline: 'Mitarbeit bei Dreier Frenzel Architecture + Communication',
  bodyText:
    '<p>Die Aufgabe sah vor, auf einem dreieckigen Hanggrundstück ein Wohnhaus für mehrere Parteien zu bauen. Eine Herausforderung stellte neben der Form, die Größe des Baugrundstücks dar und damit die Einhaltung der Abstandsflächen zu den angrenzenden Nachbarn.</p><br/><p>Der besonders restriktive Zustand des Grundstücks erzeugt die Form des Gebäudes, ein Dreieck mit zwei abgestumpften Winkeln. Als Teil der äußeren Matrix erinnert die innere Räumlichkeit an das „Fraktal“, indem sie eine orthogonale Geometrie der Räume vorschlägt. Beim Zusammentreffen dieser beiden Figuren entsteht eine interstitielle Gegenform, die die Tagesräume (Eingang, Küche, Esszimmer, Wohnzimmer, Büro) verbindet und sie durch Einklemm- und Dehnungseffekte in einer Reihe organisiert. Um die Mietfläche auf einem beengten Grundstück zu maximieren, werden die Treppen an der Vorderseite platziert. Diese Extraktion von Verkehrsflächen außerhalb des bebauten Volumens ermöglicht eine Optimierung der Wohnungstypologie durch die Gruppierung von Serviceräumen (Aufzug, Badezimmer, Küche) um einen minimalen zentralen Kern. An der Fassade gewährleistet die versetzte Anordnung der Balkone die Integration der drei Treppenläufe, stärkt gleichzeitig die kollektive Identität des Gebäudes und fördert die Interaktion zwischen den Bewohnern. Die kontextuelle Einfügung erfolgt durch die Neuinterpretation zahlreicher Elemente, die dem architektonischen Register des 19. Jahrhunderts entlehnt sind und in den Nachbargebäuden zum Ausdruck kommen: tragende Fassade, Mansarddach, französische Fenster, Kennzeichnung von Fensterlaibungen, vorspringende Balkone, Geländer.</p>',
  location: 'Renens, Schweiz',
  type: 'Neubau',
  size: '',
  state: 'Realisiert',
  timerange: '2016',
  performance: 'LPH 2',
  client: 'Privat',
  team: '',
  company: 'Werkstudentin bei Dreier Frenzel Architecture + Communication',
};

export default boulderChurch;
