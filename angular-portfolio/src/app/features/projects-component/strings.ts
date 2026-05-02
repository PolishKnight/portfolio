export const strings = {
  title: {
    pl: 'Moje Projekty',
    en: 'My Projects',
  },
  buttons: {
    view: {
      pl: 'Zobacz projekt',
      en: 'View Project',
    },
  },
  projects: [
    {
      title: { pl: 'CR PZSzach Scraper', en: 'CR PZSzach Scraper' },
      description: {
        pl: 'Aplikacja pobierająca dane z Centralnego Rejestru PZSzach. Aplikacja jest automatycznie codziennie uruchamiana aby dane w plikach json były zawsze aktualne.',
        en: 'An application that scrapes data from the Central Register of the Polish Chess Federation. It runs automatically every day to ensure the JSON data files are always up to date.',
      },
      imgSrc: 'projects/crscriper.png',
      srcProject: 'https://github.com/PolishKnight/cr-pzszach-scraper',
      tech: ['JS', 'NodeJS', 'JSON'],
    },
    {
      title: { pl: 'Kalendarz', en: 'Calendar' },
      description: {
        pl: 'Wieloplatformowy system do planowania i zarządzania czasem. Stworzony na konkurs μElektra.',
        en: 'A multi-platform time management and planning system, developed for the μElektra competition.',
      },
      imgSrc: 'projects/kalendareks.png',
      tech: ['Angular', 'SCSS', 'Bootstrap'],
      srcProject: 'https://uelektra2026.web.app',
    },
    {
      title: { pl: 'Hand Pilot', en: 'Hand Pilot' },
      description: {
        pl: 'Aplikacja w której nie używasz myszki, a ręki. Wszystko jest odczytywane z kamery i możesz wybierać kolory i rysować po tablicy ruchami ręki.',
        en: 'A touchless application where your hand replaces the mouse. Using a camera feed and hand-tracking, you can select colors and draw on a virtual whiteboard with simple hand gestures.',
      },
      imgSrc: 'projects/handpilot.png',
      tech: ['Unity', 'C#', 'Python', 'OpenCV'],
    },
  ],
};
