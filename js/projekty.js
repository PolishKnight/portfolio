const slider = document.getElementById("projects");
const projects = document.querySelectorAll(".project");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let numer = 0;
let isAnimating = false;
let isActive = false;

let isMobile = window.matchMedia("(max-width: 1300px)").matches;

function pokaz(a) {
    isMobile = window.matchMedia("(max-width: 1300px)").matches;
    if (isMobile) {
        projects.forEach((project, index) => {
            const isVisible = index == a;
            project.style.opacity = isVisible ? 1 : 0;
            project.style.pointerEvents = isVisible ? 'auto' : 'none';
            setTimeout(() => {
                project.style.display = isVisible ? 'block' : 'none';
            }, 500);
        });
    } else {
        projects.forEach((project, index) => {
            const isVisible = index >= a && index < a + 3;
            project.style.opacity = isVisible ? 1 : 0;
            project.style.pointerEvents = isVisible ? 'auto' : 'none';
            setTimeout(() => {
                project.style.display = isVisible ? 'block' : 'none';
            }, 500);
        });
    }   
}

function zmianaNumeru(delta) {
    if (!isAnimating && !isActive) {
        numer = (numer + delta + projects.length) % projects.length;
        
        if(!isMobile){
            if (numer !== 4) {
                if (numer !== 5) {
                    pokaz(numer);
                } else {
                    numer = 3;
                    pokaz(numer);
                }
            } else {
                numer = 0;
                pokaz(numer);
            }
        }else{
            if(numer != 6){
                pokaz(numer);
            }else{
                numer = 0;
                pokaz(numer)
            }
        }

        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
}

leftArrow.addEventListener("click", function() {
    zmianaNumeru(-1);
    isActive = true;
    setTimeout(() => {
        isActive = false;
    }, 5000);
});

rightArrow.addEventListener("click", function() {
    zmianaNumeru(1);
    isActive = true;
    setTimeout(() => {
        isActive = false;
    }, 5000);
});

setInterval(() => zmianaNumeru(1), 5000);