if(window.matchMedia("(max-width: 815px)").matches){
    var menu = document.getElementsByClassName("anchors");
    for (var i = 0; i < menu.length; i++) {
        menu[i].style.display = 'none';
    }
    menu = document.getElementsByClassName("options");
    for (var i = 0; i < menu.length; i++) {
        menu[i].style.display = 'none';
    }
}

document.getElementById("klik").addEventListener("click", function() {
    var menu = document.getElementsByClassName("anchors");
    if(window.getComputedStyle(menu[0]).getPropertyValue('display') != 'none'){
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = 'none';
        }
        menu = document.getElementsByClassName("options");
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = 'none';
        }
    }else{
        menu = document.getElementsByClassName("anchors");
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = 'block';
        }
        menu = document.getElementsByClassName("options");
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.display = 'block';
        }
    } 
});