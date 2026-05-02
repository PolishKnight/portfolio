import { ImgPaths as img } from '../../core/img-paths';

export const strings = {
  title: { pl: 'Umiejętności', en: 'Skills' },
  skills: {
    title: { pl: 'Umiejętności', en: 'Skills' },
    categories: [
      {
        title: { pl: 'Frontend', en: 'Frontend' },
        skills: [
          {
            name: 'HTML',
            iconSrc: img.HTML,
            color: '#E34F26',
            description: {
              pl: 'Struktura nowoczesnych stron internetowych.',
              en: 'Structure of modern websites.',
            },
          },
          {
            name: 'CSS',
            iconSrc: img.CSS,
            color: '#1572B6',
            description: {
              pl: 'Stylizacja i layout (Flexbox, Grid).',
              en: 'Styling and layout (Flexbox, Grid).',
            },
          },
          {
            name: 'SCSS',
            iconSrc: img.SCSS,
            color: '#CF649A',
            description: {
              pl: 'Zaawansowany preprocesor stylów.',
              en: 'Advanced style preprocessor.',
            },
          },
          {
            name: 'JavaScript',
            iconSrc: img.JS,
            color: '#F7DF1E',
            description: {
              pl: 'Interaktywność i logika po stronie klienta.',
              en: 'Client-side interactivity and logic.',
            },
          },
          {
            name: 'TypeScript',
            iconSrc: img.TS,
            color: '#3178C6',
            description: {
              pl: 'Typowany JavaScript zwiększający bezpieczeństwo kodu.',
              en: 'Typed JavaScript for better code safety.',
            },
          },
          { name: '__SEPARATOR__', iconSrc: '', color: '', description: { pl: '', en: '' } },
          {
            name: 'Angular',
            iconSrc: img.ANGULAR,
            color: '#DD0031',
            description: {
              pl: 'Główny framework do budowy SPA.',
              en: 'Main framework for building SPAs.',
            },
          },
          {
            name: 'RxJS',
            iconSrc: img.RXJS,
            color: '#B7178C',
            description: {
              pl: 'Programowanie reaktywne w Angularze.',
              en: 'Reactive programming in Angular.',
            },
          },
          {
            name: 'Bootstrap',
            iconSrc: img.BOOTSTRAP,
            color: '#7952B3',
            description: {
              pl: 'Framework CSS do szybkich layoutów.',
              en: 'CSS framework for fast layouts.',
            },
          },
        ],
      },
      {
        title: { pl: 'Backend, Bazy danych', en: 'Backend, Databases' },
        skills: [
          {
            name: 'PHP',
            iconSrc: img.PHP,
            color: '#777BB4',
            description: {
              pl: 'Logika serwerowa i integracja z bazami danych.',
              en: 'Server-side logic and database integration.',
            },
          },
          {
            name: 'MySQL',
            iconSrc: img.MYSQL,
            color: '#00758F',
            description: { pl: 'Relacyjne bazy danych SQL.', en: 'Relational SQL databases.' },
          },
          {
            name: 'PostgreSQL',
            iconSrc: img.POSTGRES,
            color: '#336791',
            description: {
              pl: 'Zaawansowana obiektowo-relacyjna baza danych.',
              en: 'Advanced object-relational database.',
            },
          },
          {
            name: 'Firebase',
            iconSrc: img.FIREBASE,
            color: '#FFCA28',
            description: {
              pl: 'Platforma backendowa od Google (BaaS).',
              en: 'Backend platform by Google (BaaS).',
            },
          },
          {
            name: 'JSON',
            iconSrc: img.JSON,
            color: '#292929',
            description: { pl: 'Format wymiany danych.', en: 'Data exchange format.' },
          },
        ],
      },
      {
        title: { pl: '.NET i GameDev', en: '.NET & GameDev' },
        skills: [
          {
            name: 'C#',
            iconSrc: img.CSHARP,
            color: '#239120',
            description: {
              pl: 'Główny język obiektowy ekosystemu Microsoft.',
              en: 'Main object-oriented language for Microsoft ecosystem.',
            },
          },
          {
            name: 'WPF',
            iconSrc: img.WPF,
            color: '#512BD4',
            description: {
              pl: 'Aplikacje desktopowe z interfejsem XAML.',
              en: 'Desktop applications with XAML interface.',
            },
          },
          {
            name: 'Unity',
            iconSrc: img.UNITY,
            color: '#000000',
            description: {
              pl: 'Silnik do tworzenia gier i symulacji.',
              en: 'Engine for game development and simulations.',
            },
          },
        ],
      },
      {
        title: { pl: 'Pozostałe', en: 'Other' },
        skills: [
          {
            name: 'Java',
            iconSrc: img.JAVA,
            color: '#007396',
            description: {
              pl: 'Programowanie obiektowe klasy Enterprise.',
              en: 'Enterprise-grade object-oriented programming.',
            },
          },
          {
            name: 'C++',
            iconSrc: img.CPP,
            color: '#00599C',
            description: {
              pl: 'Wydajne programowanie niskopoziomowe.',
              en: 'High-performance low-level programming.',
            },
          },
          {
            name: 'Python',
            iconSrc: img.PYTHON,
            color: '#3776AB',
            description: {
              pl: 'Wszechstronny język skryptowy.',
              en: 'Versatile scripting language.',
            },
          },
        ],
      },
      {
        title: { pl: 'Narzędzia', en: 'Tools' },
        skills: [
          {
            name: 'Git',
            iconSrc: img.GIT,
            color: '#F05032',
            description: { pl: 'System kontroli wersji.', en: 'Version control system.' },
          },
          {
            name: 'GitHub',
            iconSrc: img.GITHUB,
            color: '#181717',
            description: {
              pl: 'Hosting projektów i współpraca.',
              en: 'Project hosting and collaboration.',
            },
          },
          {
            name: 'Gimp',
            iconSrc: img.GIMP,
            color: '#5C5543',
            description: { pl: 'Obróbka grafiki rastrowej.', en: 'Raster graphics editing.' },
          },
        ],
      },
    ],
  },
};
