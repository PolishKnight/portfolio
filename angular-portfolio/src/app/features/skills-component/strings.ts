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
              pl: 'Tworzenie semantycznej i dostępnej struktury stron, dbając o standardy SEO i czytelność kodu.',
              en: 'Building semantic and accessible web structures, focusing on SEO standards and code readability.',
            },
          },
          {
            name: 'CSS',
            iconSrc: img.CSS,
            color: '#1572B6',
            description: {
              pl: 'Projektowanie responsywnych układów przy użyciu Flexbox i Grid oraz dbałość o detale wizualne.',
              en: 'Designing responsive layouts using Flexbox and Grid with a strong focus on visual details.',
            },
          },
          {
            name: 'SCSS',
            iconSrc: img.SCSS,
            color: '#CF649A',
            description: {
              pl: 'Organizacja stylów za pomocą zmiennych i zagnieżdżeń, co pozwala na łatwiejsze utrzymanie dużych projektów.',
              en: 'Organizing styles using variables and nesting to ensure better maintainability of large-scale projects.',
            },
          },
          {
            name: 'JavaScript',
            iconSrc: img.JS,
            color: '#F7DF1E',
            description: {
              pl: 'Implementacja dynamicznych funkcjonalności i logiki, która ożywia interfejs użytkownika.',
              en: 'Implementing dynamic functionalities and logic that brings the user interface to life.',
            },
          },
          {
            name: 'TypeScript',
            iconSrc: img.TS,
            color: '#3178C6',
            description: {
              pl: 'Wykorzystanie silnego typowania do tworzenia bezpieczniejszego i bardziej skalowalnego kodu w aplikacjach Angular.',
              en: 'Using strong typing to build safer and more scalable code within Angular applications.',
            },
          },
          { name: '__SEPARATOR__', iconSrc: '', color: '', description: { pl: '', en: '' } },
          {
            name: 'Angular',
            iconSrc: img.ANGULAR,
            color: '#DD0031',
            description: {
              pl: 'Budowa modularnych aplikacji typu SPA, wykorzystując komponenty, serwisy i nowoczesny system routingu.',
              en: 'Building modular SPA applications using components, services, and a modern routing system.',
            },
          },
          {
            name: 'RxJS',
            iconSrc: img.RXJS,
            color: '#B7178C',
            description: {
              pl: 'Obsługa strumieni danych i asynchroniczności, zapewniająca płynne działanie interfejsu.',
              en: 'Handling data streams and asynchronicity to ensure a smooth and reactive user interface.',
            },
          },
          {
            name: 'Bootstrap',
            iconSrc: img.BOOTSTRAP,
            color: '#7952B3',
            description: {
              pl: 'Szybkie prototypowanie i budowa w pełni responsywnych interfejsów opartych na gotowych komponentach.',
              en: 'Fast prototyping and building fully responsive interfaces based on ready-to-use components.',
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
              pl: 'Tworzenie skryptów po stronie serwera oraz obsługa komunikacji między aplikacją a bazą danych.',
              en: 'Developing server-side scripts and handling communication between the application and the database.',
            },
          },
          {
            name: 'MySQL',
            iconSrc: img.MYSQL,
            color: '#00758F',
            description: {
              pl: 'Projektowanie struktur relacyjnych baz danych oraz optymalizacja zapytań SQL dla szybkiego dostępu do danych.',
              en: 'Designing relational database structures and optimizing SQL queries for fast data access.',
            },
          },
          {
            name: 'PostgreSQL',
            iconSrc: img.POSTGRES,
            color: '#336791',
            description: {
              pl: 'Podstawowa znajomość pracy z zaawansowanym systemem relacyjnym i wykonywania zapytań na gotowych strukturach.',
              en: 'Basic experience with the advanced relational system and performing queries on existing structures.',
            },
          },
          {
            name: 'Firebase',
            iconSrc: img.FIREBASE,
            color: '#FFCA28',
            description: {
              pl: 'Wykorzystanie usług chmurowych do autoryzacji, bazy danych czasu rzeczywistego (NoSQL) oraz hostingu aplikacji.',
              en: 'Utilizing cloud services for authentication, real-time databases (NoSQL), and application hosting.',
            },
          },
          {
            name: 'JSON',
            iconSrc: img.JSON,
            color: '#292929',
            description: {
              pl: 'Efektywne przesyłanie i strukturyzowanie danych w komunikacji API oraz w lokalnych systemach przechowywania informacji.',
              en: 'Efficient data transmission and structuring in API communication and local information storage systems.',
            },
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
              pl: 'Wykorzystanie programowania obiektowego do tworzenia logiki gier w Unity oraz stabilnych aplikacji desktopowych.',
              en: 'Leveraging object-oriented programming to create game logic in Unity and stable desktop applications.',
            },
          },
          {
            name: 'WPF',
            iconSrc: img.WPF,
            color: '#512BD4',
            description: {
              pl: 'Budowa aplikacji okienkowych dla systemu Windows z wykorzystaniem języka XAML do projektowania interfejsu.',
              en: 'Building Windows desktop applications using XAML for user interface design.',
            },
          },
          {
            name: 'Unity',
            iconSrc: img.UNITY,
            color: '#000000',
            description: {
              pl: 'Tworzenie interaktywnych projektów 3D i 2D, w tym implementacja nietypowych metod sterowania (np. gestami ręki).',
              en: 'Creating interactive 3D and 2D projects, including implementation of unconventional control methods (e.g., hand gestures).',
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
              pl: 'Realizacja projektów szkolnych, w tym prostych aplikacji konsolowych oraz mobilnych w środowisku Android Studio.',
              en: 'Developing school projects, including simple console and mobile applications using Android Studio.',
            },
          },
          {
            name: 'C++',
            iconSrc: img.CPP,
            color: '#00599C',
            description: {
              pl: 'Wykorzystanie języka do nauki algorytmiki i struktur danych oraz rozwiązywania problemów logicznych.',
              en: 'Using the language for learning algorithms and data structures, and solving logical problems.',
            },
          },
          {
            name: 'Python',
            iconSrc: img.PYTHON,
            color: '#3776AB',
            description: {
              pl: 'Wykorzystanie języka do rozwiązywania problemów logicznych oraz zadań algorytmicznych w ramach zajęć informatycznych.',
              en: 'Using the language to solve logical problems and algorithmic tasks as part of computer science classes.',
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
            description: {
              pl: 'Zarządzanie historią zmian w kodzie i praca na gałęziach (branches) w projektach indywidualnych.',
              en: 'Managing code version history and working with branches in personal projects.',
            },
          },
          {
            name: 'GitHub',
            iconSrc: img.GITHUB,
            color: '#181717',
            description: {
              pl: 'Hosting projektów, publikacja dokumentacji oraz automatyzacja za pomocą GitHub Actions.',
              en: 'Project hosting, documentation publishing, and automation using GitHub Actions.',
            },
          },
          {
            name: 'Gimp',
            iconSrc: img.GIMP,
            color: '#5C5543',
            description: {
              pl: 'Podstawowa edycja grafik, ikon i assetów na potrzeby interfejsów użytkownika.',
              en: 'Basic editing of graphics, icons, and assets for user interfaces.',
            },
          },
        ],
      },
    ],
  },
};
