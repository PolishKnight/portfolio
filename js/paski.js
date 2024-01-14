document.addEventListener('DOMContentLoaded', function () {

    var skils = document.querySelectorAll('.umiejetnosci');
    var lang = document.querySelectorAll('.languages');
    var material = document.querySelectorAll('.material-symbols-outlined');

    document.querySelectorAll('.pasek').forEach(function(pasek, index) {
        pasek.addEventListener('click', function() {
            toggleDisplay(skils[index], index);
        });
    });

    function toggleDisplay(element, index) {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hide');
            setTimeout(function() {
                switch(index){
                    case 0:
                        for(let i = 0; i <= 3; i++){
                            lang[i].style.display = 'none';
                        }
                        material[0].innerHTML = "expand_more";
                        break;
                    case 1:
                        for(let i = 4; i <= 6; i++){
                            lang[i].style.display = 'none';
                        }
                        material[1].innerHTML = "expand_more";
                        break;
                    case 2:
                        for(let i = 7; i <= 9; i++){
                            lang[i].style.display = 'none';
                        }
                        material[2].innerHTML = "expand_more";
                        break;
                    case 3:
                        for(let i = 10; i <= 11; i++){
                            lang[i].style.display = 'none';
                        }
                        material[3].innerHTML = "expand_more";
                        break;
                    case 4:
                        for(let i = 12; i <= 14; i++){
                            lang[i].style.display = 'none';
                        }
                        material[4].innerHTML = "expand_more";
                        break;
                }
            }, 400);
        } else {
            switch(index){
                case 0:
                    for(let i = 0; i <= 3; i++){
                        lang[i].style.display = 'block';
                    }
                    material[0].innerHTML = "expand_less";
                    break;
                case 1:
                    for(let i = 4; i <= 6; i++){
                        lang[i].style.display = 'block';
                    }
                    material[1].innerHTML = "expand_less";
                    break;
                case 2:
                    for(let i = 7; i <= 9; i++){
                        lang[i].style.display = 'block';
                    }
                    material[2].innerHTML = "expand_less";
                    break;
                case 3:
                    for(let i = 10; i <= 11; i++){
                        lang[i].style.display = 'block';
                    }
                    material[3].innerHTML = "expand_less";
                    break;
                case 4:
                    for(let i = 12; i <= 14; i++){
                        lang[i].style.display = 'block';
                    }
                    material[4].innerHTML = "expand_less";
                    break;
            }
            element.classList.remove('hide');
            element.classList.add('show');
        }
    }
});