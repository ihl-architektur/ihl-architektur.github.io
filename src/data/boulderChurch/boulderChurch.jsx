import { importAll } from 'components/utils/helper';

const images = importAll(
  require.context('../../assets/projects-a', false, /\.(png|jpe?g|svg)$/)
);

const boulderChurch = {
  images: [
    {
      imageUrl: images['01_Ihl-Architektur_BOU_Innenperspektive.jpg'],
      subtitle: 'Grundriss Erdgeschoss',
    },
    {
      imageUrl: images['02_Ihl-Architektur_BOU_Erdgeschoss.jpg'],
      subtitle: 'Grundriss Obergeschoss',
    },
  ],
  title: "Boulderhalle 'Boulderchurch'",
  topline: 'Eigene Arbeit',
  bodyText:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget enim nec ligula volutpat facilisis ut ac purus. In et velit id est volutpat interdum non nec velit. Cras interdum pharetra nibh, ac viverra nisi auctor nec. Quisque ac erat risus. Ut volutpat dui felis, vitae tempor lacus vehicula a. Duis sit amet turpis turpis. Integer sollicitudin interdum libero, vel interdum nisl. Aliquam eget auctor orci. Cras luctus nisl ac malesuada suscipit. Fusce in massa ipsum. Donec fermentum velit sit amet magna consectetur, et porttitor nisi facilisis. Suspendisse condimentum nibh at ex vehicula, quis tincidunt nunc dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a eros vel sapien aliquet ultricies. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur rhoncus quam non auctor blandit. Sed dictum nisl in facilisis tincidunt. Vivamus vel felis non ipsum facilisis malesuada eget ut mi. Nulla et dui arcu. Fusce ut velit et lacus facilisis dapibus sed sit amet urna. Donec nec nulla eu erat fringilla hendrerit nec sed est. Maecenas euismod velit ut libero faucibus, id suscipit augue congue. Integer non bibendum sapien. In feugiat lectus nec orci lobortis, id varius felis scelerisque. Etiam pellentesque est id magna scelerisque vehicula. Nam sed nisl nisl. Phasellus elementum ac lectus id ultricies. Aliquam luctus lacinia tortor sit amet maximus. Nulla a malesuada leo, et cursus tortor.',
  location: 'Michaelskirche Bad Orb, Deutschland',
  size: '1.656 m² BGF',
  state: 'In Planung',
  timerange: '2021-2016',
  performance: 'LPH 1-9',
  client: 'Stiftung Detusches Optisches Museum',
};

export default boulderChurch;
