let img = document.getElementById("jezyk");
var typedoMniep;

const PLoMniep = 'Jestem <span class="wyroznienie">pasjonatem gamedevu</span> z doświadczeniem w <span class="wyroznienie">Unity i C#</span>. Specjalizuję się również w <span class="wyroznienie">tworzeniu aplikacji WPF</span>, a moje umiejętności obejmują również <span class="wyroznienie">projektowanie i tworzenie stron internetowych (HTML, CSS, JS)</span>.<br>Posiadam również zaświadczenie o ukończeniu kursu <span class="wyroznienie">"Projektowania Stron Internetowych"</span> i <span class="wyroznienie">"Grafiki Komputerowej"</span>. <br>Moja misja to przekształcanie koncepcji w praktyczne i innowacyjne rozwiązania. Zainspirowany kreatywnością, ciągle poszukuję nowych wyzwań w świecie programowania.';

const ENoMniep = 'I am <span class="wyroznienie">a passionate game developer</span> with experience in <span class="wyroznienie">Unity and C#</span>. I also specialize in <span class="wyroznienie">creating WPF applications</span>, and my skills extend to <span class="wyroznienie">designing and building websites (HTML, CSS, JS)</span>.<br>I hold certificates in <span class="wyroznienie">"Web Design"</span> and <span class="wyroznienie">"Computer Graphics"</span>. <br>My mission is to transform concepts into practical and innovative solutions. Inspired by creativity, I continually seek new challenges in the programming world.';

var typedheaderh1 = new Typed('#headerh1', {
    strings: ['', 'Mateusz Lewandowski'],
    typeSpeed: 10,
    showCursor: false,
});

typedoMniep = new Typed('#oMniep', {
    strings: ['', PLoMniep],
    typeSpeed: 1,
    onComplete: function() {
        document.querySelector('.typed-cursor').style.display = 'none';
    }
});

img.addEventListener("click", function() {
    var htmlLang = document.documentElement.lang;

    document.querySelector('.typed-cursor').style.display = 'none';

    if (htmlLang === "pl") {
        document.documentElement.lang = "en";
        img.src = "images/wb.png";
        img.alt = "English language";

        aoMnie.innerHTML  = 'About me <div class="after"></div>';
        aumiejetnosci.innerHTML  = 'Skills <div class="after"></div>';
        aprojekty.innerHTML  = 'Projects <div class="after"></div>';
        akontakt.innerHTML  = 'Contact <div class="after"></div>';
        oMnie.innerHTML = '<h2 id="oMnieh2">About me</h2><h3>Hi, I am <span class="naglowki" id="name">Mateusz Lewandowski</span></h3><p id="oMniep"></p>';
        umiejetnoscih2.innerHTML = 'Skills';
        spanStrony.innerHTML = 'Websites';
        htmlp.innerHTML = 'The language I use for creating websites.';
        cssp.innerHTML = 'I employ it for styling and enhancing the appearance of the page.';
        jsp.innerHTML = 'I utilize this programming language to add functionality and animations to the website.';
        mysqlp.innerHTML = 'I am learning to create and manage databases using MySQL.';
        csp.innerHTML = 'The language I use for programming in Unity and WPF.';
        unityp.innerHTML = 'The engine I utilize for creating 2D and 3D games.';
        wpfp.innerHTML = 'I use this framework to develop simple desktop applications.';
        spanGrafika.innerHTML = 'Graphics';
        kritap.innerHTML = 'I am learning to create my own graphics in this program.';
        gimpp.innerHTML = 'I use this software for graphic processing.';
        blenderp.innerHTML = 'I am learning to create 3D graphics and animations.';
        spanJezykiPro.innerHTML = 'Programming languages';
        pythonp.innerHTML = 'I use this language for creating console applications, but it is a secondary programming language for me.';
        cppp.innerHTML = 'I am familiar with the basics of this language, and currently, I am not focusing on delving deeper into it.';
        spanJezyki.innerHTML = 'Languages';
        angielskih2.innerHTML = 'English';
        angielskip.innerHTML = 'My English proficiency is around A2/A2+. I am constantly working on improving my language skills.';
        niemieckih2.innerHTML = 'German';
        niemieckip.innerHTML = 'I have basic proficiency in German.';
        koreanskih2.innerHTML = 'Korean';
        koreanskip.innerHTML = 'I am learning Korean in my free time as a hobby.';
        projektyh2.innerHTML = 'Projects';
        kontakth2.innerHTML = 'Contact';
        nicklabel.innerHTML = 'Nickname or full name'
        nick.placeholder = 'Enter your nickname';
        emaillabel.innerHTML = 'Your email'
        mail.placeholder = 'Enter your email'
        msglabel.innerHTML = 'Your message';
        msg.placeholder = 'Enter your message'
        wyslij.value = 'Send';
        wyczysc.value = 'Clear';
        copyh4.innerHTML = '&copy; 2024 Mateusz Lewandowski. All rights reserved.';

        typedheaderh1.stop();
        typedoMniep.stop();

        typedheaderh1 = new Typed('#headerh1', {
            strings: ['', 'Mateusz Lewandowski'],
            typeSpeed: 10,
            showCursor: false,
        });

        typedoMniep = new Typed('#oMniep', {
            strings: ['', ENoMniep],
            typeSpeed: 1,
            onComplete: function() {
                document.querySelector('.typed-cursor').style.display = 'none';
            }
        });


    } else if (htmlLang === "en") {
        document.documentElement.lang = "pl";
        img.src = "images/polska.png";
        img.alt = "Język polski";

        aoMnie.innerHTML  = 'O mnie <div class="after"></div>';
        aumiejetnosci.innerHTML  = 'Umiejętności <div class="after"></div>';
        aprojekty.innerHTML  = 'Projekty <div class="after"></div>';
        akontakt.innerHTML  = 'Kontakt <div class="after"></div>';
        oMnie.innerHTML = '<h2 id="oMnieh2">O mnie</h2><h3>Cześć, jestem <span class="naglowki" id="name">Mateusz Lewandowski</span></h3><p id="oMniep"></p>';
        umiejetnoscih2.innerHTML = 'Umiejętności';
        spanStrony.innerHTML = 'Strony internetowe';
        htmlp.innerHTML = 'Język, którego używam do tworzenia stron internetowych.';
        cssp.innerHTML = 'Wykorzystuję do stylizacji i poprawy wyglądu strony.';
        jsp.innerHTML = 'Używam tego języka programowania do dodawania funkcjonalności i animacji na stronie internetowej.';
        mysqlp.innerHTML = 'Uczę się tworzenia i administrowania bazami danych przy użyciu MySQL.';
        csp.innerHTML = 'Język, który używam do programowania w Unity i WPF.';
        unityp.innerHTML = 'Silnik, który wykorzystuję do tworzenia gier 2D oraz 3D.';
        wpfp.innerHTML = 'Używam tego frameworka do tworzenia prostych aplikacji desktopowych.';
        spanGrafika.innerHTML = 'Grafika';
        kritap.innerHTML = 'Uczę się w tym programie tworzyć własne grafiki.';
        gimpp.innerHTML = 'Używam tego programu do obróbki graficznej.';
        blenderp.innerHTML = 'Uczę się tworzyć grafiki 3D oraz animacje.';
        spanJezykiPro.innerHTML = 'Języki programowania';
        pythonp.innerHTML = 'Używam tego języka do tworzenia aplikacji konsolowych, jednak jest to dla mnie poboczny język programowania.';
        cppp.innerHTML = 'Znam podstawy tego języka i aktualnie nie skupiam się na poznawaniu go głębiej.';
        spanJezyki.innerHTML = 'Języki';
        angielskih2.innerHTML = 'Angielski';
        angielskip.innerHTML = 'Mój poziom angielskiego to około A2/A2+. Cały czas pracuję nad rozwijaniem tego języka.';
        niemieckih2.innerHTML = 'Niemiecki';
        niemieckip.innerHTML = 'Znam niemiecki na poziomie podstawowym.';
        koreanskih2.innerHTML = 'Koreański';
        koreanskip.innerHTML = 'Koreańskiego uczę się w wolnym czasie i traktuje to jako hobby.';
        projektyh2.innerHTML = 'Projekty';
        kontakth2.innerHTML = 'Kontakt';
        nicklabel.innerHTML = 'Nick lub imię i nazwisko'
        nick.placeholder = 'Wpisz swój nick';
        emaillabel.innerHTML = 'Twój e-mail'
        mail.placeholder = 'Wpisz swój e-mail'
        msglabel.innerHTML = 'Twoja wiadomość';
        msg.placeholder = 'Wpisz swoją wiadomość'
        wyslij.value = 'Wyślij';
        wyczysc.value = 'Wyczyść';
        copyh4.innerHTML = '&copy; 2024 Mateusz Lewandowski. Wszystkie prawa zastrzeżone.';

        typedheaderh1.stop();
        typedoMniep.stop();

        typedheaderh1 = new Typed('#headerh1', {
            strings: ['', 'Mateusz Lewandowski'],
            typeSpeed: 10,
            showCursor: false,
        });

        typedoMniep = new Typed('#oMniep', {
            strings: ['', PLoMniep],
            typeSpeed: 1,
            onComplete: function() {
                document.querySelector('.typed-cursor').style.display = 'none';
            }
        });
    }
});
