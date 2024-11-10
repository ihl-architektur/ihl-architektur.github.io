import { importAll } from 'utils/helper';

const images = importAll(
  require.context(
    '../../../assets/a_boulderchurch',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const boulderChurch = {
  metaDescription:
    'Isabelle Ihl Architektur - Konzepte und Räume, die Menschen zusammenbringen, ihren Austausch fördern und zu einer positiven sowie nachhaltigen Veränderung beitragen.',
  metaKeywords:
    'Isabelle Ihl, Isabelle Ihl Architektur, Isabelle Ihl Architektin, Ihl Architektur, Boulderchurch, Boulderhalle Bad Orb, Michaelskirche Bad Orb, Boulderhalle in Kirche, Umnutzung Kirche',
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
      imageUrl: images['03_Ihl-Architektur_BOU_Isometrie.jpg'],
      subtitle: 'Isometrie Nutzungsaufteilung',
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
  title: "Boulderhalle 'Boulderchurch'",
  topline: 'Eigenes Projekt',
  bodyText:
    '<p>Kirchen erzählen als Baudenkmäler spannende Geschichten über Generationen hinweg und sind in unserer Gesellschaft ein bedeutendes Kulturzeugnis. Dieses gilt es zu wahren, selbst wenn eine große Zahl von Kirchenbauten ihre ursprüngliche Funktion als Sakralräume verlieren.</p><br/><p>Auch die Gemeinde der St. Michaelskirche Bad Orb steht vor der Herausforderung, das besondere Bauwerk anders zu interpretieren und einer angemessenen Nutzung zuzuführen. Eine funktionale Teilumwidmung soll die bereits seit 2016 geschlossene Kirche wieder neu beleben. Mit der Zustimmung des Bistums Fulda und Akzeptanz in der Gemeinde wird das Gebäude als Boulderhalle ausgebaut - im rückwärtigen Bereich bleibt die Marienkapelle, die Sakristei sowie der Chorraum als zukünftige Begegnungsstätte für eine Jugendkirche erhalten.</p><p>Entsprechend zeigt sich die Umwidmung hauptsächlich im Bereich des Hauptschiffes: Über den ehemaligen, eingeschossigen Windfang als Eingangsbereich mit Bistro gelangen Besucher*innen in den 12 m hohen Raum der Hallenkirche. Hier fügen sich die neuen Boulderwandeinbauten respektvoll in das bestehende Volumen ein und gestalten seine Identität mit. So ergänzt auch ein Einbau, der die Höhe der bestehenden Empore aufnimmt, die Boulderflächen auf einer weiteren Ebene. Dadurch kann sowohl ein Angebot zur Ausbildung, für Breiten- und Spitzensport als auch ein separater Familien- sowie Trainingsbereich realisiert werden. Umkleiden finden sich in der ehemaligen Taufkapelle im westlichen Kirchenanbau wieder, während eine Abtrennung eines Teilbereichs der danebenliegenden Sakristei Platz für ergänzende Sanitäranlagen bietet.</p><br/><p>Damit geht das Potenzial des sakralen Raumes der St. Michaelskirche nicht verloren, es mutiert vielmehr – zukünftig kann ihre ‚Höhe‘ weniger als himmlische Sphäre denn als alpine Herausforderung interpretiert und erlebbar gemacht werden.</p><p><br/><p>Webseite:</p><p>www.boulderchurch.de</p>',
  location: 'Michaelskirche Bad Orb, Deutschland',
  type: 'Nutzungserweiterung',
  size: '1.656 m² BGF',
  state: 'in Realisierung',
  timerange: '2023 - 2025',
  performance: 'LPH 1-5',
  client: 'Boulderchurch GmbH',
  team: '<p>Statik: Kleespies Ingenieure</p><p>Brandschutz: Rieser Wessel GbR </p><p>Boulderwandpl.: Problemkind Routenbau </p><p>Boulderwandhersteller: VerSys GmbH </p><p>Zuarbeit Parkplatzplanung: Next Habitat </p><p>Bestandsaufmaß: VB Hummel </p>',
  company: '',
};

export default boulderChurch;
