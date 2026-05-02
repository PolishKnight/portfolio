import { ImgPaths as img } from '../../core/img-paths';

export const strings = {
  title: {
    pl: 'Doświadczenie',
    en: 'Experience',
  },
  timeline: [
    {
      title: { pl: 'Edukacja: Technik Programista', en: 'Education: Programmer Technician' },
      date: { pl: '2022 - Obecnie', en: '2022 - Present' },
      description: {
        pl: 'Zdobywanie wiedzy na temat podstaw algorytmiki, struktur danych oraz programowania aplikacji konsolowych, webowych, desktopowych i mobilnych.',
        en: 'Gaining knowledge of algorithms, data structures, and the development of console, web, desktop, and mobile applications.',
      },
      iconClass: 'fa-solid fa-school',
      company: 'ZSMEiE w Toruniu',
      techStack: [img.PYTHON, img.CPP, img.JAVA],
    },
    {
      title: {
        pl: 'Kurs: Projektowanie stron internetowych',
        en: 'Course: Web Design & Development',
      },
      date: { pl: '2023', en: '2023' },
      description: {
        pl: 'Ukończenie 60-godzinnego kursu skupionego na tworzeniu responsywnych witryn (RWD) oraz podstawach JavaScript.',
        en: 'Completed a 60-hour course focused on responsive web design (RWD) and JavaScript fundamentals.',
      },
      iconClass: 'fa-solid fa-book-bookmark',
      techStack: [img.HTML, img.CSS, img.JS],
    },
    {
      title: {
        pl: 'Kurs: Grafika komputerowa',
        en: 'Course: Computer Graphics',
      },
      date: { pl: '2023', en: '2023' },
      description: {
        pl: 'Ukończenie 20-godzinnego kursu z zakresu edycji grafiki rastrowej oraz tworzenia ilustracji wektorowych.',
        en: 'Completed a 20-hour course in raster graphics editing and vector illustration.',
      },
      iconClass: 'fa-solid fa-palette',
      techStack: [img.GIMP, img.INKSCAPE],
    },
    {
      title: {
        pl: 'Praktyki zawodowe: Frontend Developer',
        en: 'Professional Internship: Frontend Developer',
      },
      date: { pl: '2025', en: '2025' },
      description: {
        pl: 'Miesięczne praktyki zawodowe obejmujące intensywną naukę i praktyczne zastosowanie frameworka Angular oraz zaawansowanych arkuszy stylów SCSS.',
        en: 'A month-long professional internship involving intensive learning and practical application of the Angular framework and advanced SCSS stylesheets.',
      },
      iconClass: 'fa-solid fa-briefcase',
      company: 'MGA Sp. z o. o.',
      techStack: [img.ANGULAR, img.TS, img.SCSS, img.HTML],
    },
    {
      title: {
        pl: 'Egzamin Zawodowy: INF.03',
        en: 'State Vocational Exam: INF.03',
      },
      date: { pl: '2025', en: '2025' },
      description: {
        pl: 'Oficjalne potwierdzenie kwalifikacji w zakresie tworzenia i administrowania stronami, aplikacjami internetowymi oraz bazami danych.',
        en: 'Official state certification in web development, web administration, and database management.',
      },
      iconClass: 'fa-solid fa-graduation-cap',
      techStack: [img.HTML, img.CSS, img.JS, img.PHP, img.MYSQL],
    },
    {
      title: {
        pl: 'Zlecenie: Automatyzacja dokumentacji PDF',
        en: 'Contract: PDF Documentation Automation',
      },
      date: { pl: '2025', en: '2025' },
      description: {
        pl: 'Projekt i implementacja oprogramowania desktopowego do automatycznej analizy i przetwarzania dokumentacji technicznej w formacie PDF.',
        en: 'Design and implementation of desktop software for automated analysis and processing of technical PDF documentation.',
      },
      iconClass: 'fa-solid fa-file-invoice',
      company: 'CodeDog Sp. z o. o.',
      techStack: [img.CSHARP, img.WPF],
    },
    {
      title: {
        pl: 'Staż uczniowski: Frontend Developer',
        en: 'Student Internship: Frontend Developer',
      },
      date: { pl: '2025', en: '2025' },
      description: {
        pl: '120-godzinny staż skupiony na zaawansowanych aspektach Angulara, w tym programowaniu reaktywnym z RxJS oraz budowaniu interfejsów z Bootstrap.',
        en: 'A 120-hour internship focused on advanced Angular concepts, including reactive programming with RxJS and UI development with Bootstrap.',
      },
      iconClass: 'fa-solid fa-user-gear',
      company: 'MGA Sp. z o. o.',
      techStack: [img.ANGULAR, img.TS, img.RXJS, img.SCSS, img.BOOTSTRAP, img.HTML],
    },
    {
      title: {
        pl: 'Praktyki zawodowe: Frontend Developer',
        en: 'Professional Internship: Frontend Developer',
      },
      date: { pl: '2026', en: '2026' },
      description: {
        pl: 'Samodzielna implementacja modułów funkcjonalnych oraz optymalizacja interfejsów użytkownika w dedykowanym oprogramowaniu biznesowym.',
        en: 'Independent implementation of functional modules and UI optimization for dedicated business software.',
      },
      iconClass: 'fa-solid fa-briefcase',
      company: 'MGA Sp. z o. o.',
      techStack: [img.ANGULAR, img.TS, img.RXJS, img.SCSS, img.BOOTSTRAP, img.HTML],
    },
  ],
};
