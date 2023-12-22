import { getImage } from '../utils/imagesUtils';
import { getGoogleMapsPlace } from '../utils/googleMapsUtils';

export const exploreNearby = [
  {
    img: getImage('5j2.webp'),
    location: "Buenos Aires' Obelisco",
    distance: '30-minute metro',
    link: getGoogleMapsPlace('2kEuZTmL6VqncaR6A'),
  },
  {
    img: getImage('1to.webp'),
    location: 'Puente de la Mujer',
    distance: '45-minute bus',
    link: getGoogleMapsPlace('2mwZ3J7KWK6SQrRk6'),
  },
  {
    img: getImage('40m.webp'),
    location: 'Puerto Madero',
    distance: '30-minute bus',
    link: getGoogleMapsPlace('6pYtZcFFm8BuZhZL7'),
  },
  {
    img: getImage('msp.webp'),
    location: 'Biblioteca Nacional Mariano Moreno',
    distance: '20-minute bus',
    link: getGoogleMapsPlace('S3DDSv1FQNdtDQAi8'),
  },
  {
    img: getImage('2k3.webp'),
    location: 'Parque el Rosedal',
    distance: '15-minute bus',
    link: getGoogleMapsPlace('z7q6FKTKKH7UvC3G8'),
  },
  {
    img: getImage('ynx.webp'),
    location: 'Jardín Japonés',
    distance: '15-minute bus',
    link: getGoogleMapsPlace('H6BusrJuY9ZR1Sf79'),
  },
  {
    img: getImage('kji.webp'),
    location: 'Hipódromo de Palermo',
    distance: '10-minute walk',
    link: getGoogleMapsPlace('LFuXdFWA8xVjoAZH9'),
  },
  {
    img: getImage('41m.webp'),
    location: 'Alto Palermo Shopping',
    distance: '10-minute bus',
    link: getGoogleMapsPlace('Fz3agZHyNsPp72mL6'),
  },
];

export const presentationGallery = [
  {
    img: getImage('home-1.jpg'),
    title: 'Brightful',
  },
  {
    img: getImage('home-10.jpg'),
    title: 'Equipped',
  },
  {
    img: getImage('home-3.jpg'),
    title: 'Comfortable',
  },
  {
    img: getImage('home-7.jpg'),
    title: 'Spaciously',
  },
];

export const searchResults = [
  {
    title: 'Little Cocoon - Covent Garden',
    img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
    location: 'London',
    description:
      'Light cosy room in a modern home. Cosy clean light room with single bed and Wi-Fi, Furniture in this room will be update to higher standards by the time of your stay.',
    star: 4.5,
    price: '$226/Night',
    reviews: 68,
    lat: 51.509598,
    long: -0.136578,
  },
  {
    title: 'Cosy Private Room in Family Home Central London',
    img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
    location: 'London',
    description:
      'Bright airy Studio apartment located on the Ground floor, a beautiful self-contained garden studio, located in the heart of historic Highgate Village.',
    star: 5.0,
    price: '$388/Night',
    reviews: 32,
    lat: 51.510639,
    long: -0.12248,
  },
  {
    title: 'Light single room - London Islington Zone 2',
    img: '/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp',
    location: 'London',
    description:
      'The apartment is equipped with a double bed and a double sofa bed and can comfortably accommodate 2 adults.',
    star: 3.8,
    price: '$284/Night',
    reviews: 107,
    lat: 51.503614,
    long: -0.126729,
  },
  {
    title: 'Prime Kensington Studio',
    img: '/assets/search/97bc37a6-9a1b-4bb2-8564-771319b246fb.webp',
    location: 'London',
    description:
      'The room has been newly decorated, Plenty of space for luggage, desk space for work.',
    star: 3.0,
    price: '$741/Night',
    reviews: 18,
    lat: 51.50722,
    long: -0.140977,
  },
  {
    title: 'Brand New, Spacious Double Room,Next to Station',
    img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
    location: 'London',
    description:
      "Welcome! This is a convenient double room with large bed & ensuite bathroom. You'll love the friendly, relaxed flat & the workspace (incl. fast WiFi).",
    star: 4.1,
    price: '$102/Night',
    reviews: 72,
    lat: 51.515634,
    long: -0.136578,
  },
  {
    title: 'Private Double room, Camden Town, London',
    img: '/assets/search/dde44668-1df5-41b6-8f91-5051975c4865.webp',
    location: 'London',
    description:
      'Bright and spacious double room ,Top floor of a 2 story house. Very close to Camden Market with its bars, restaurants, live music venues and cinemas.',
    star: 2.9,
    price: '$199/Night',
    reviews: 52,
    lat: 51.512057,
    long: -0.125442,
  },
];
