const darkModeCheckbox = document.getElementById("darkmode");
darkModeCheckbox.addEventListener("change", toggleDarkMode);

function toggleDarkMode() {
    const allElements = document.querySelectorAll('.dark, .light, .darknav,  .lightnav');

    allElements.forEach(function(element) {
        if (element.classList.contains('dark')) {
            element.classList.remove('dark');
            element.classList.add('light');

        } else if (element.classList.contains('light')) {
            element.classList.remove('light');
            element.classList.add('dark');

        }

        if(element.classList.contains('darknav')){
            element.classList.remove('darknav');
            element.classList.add('lightnav');

        } else if (element.classList.contains('lightnav')) {
            element.classList.remove('lightnav');
            element.classList.add('darknav');

        }

    });
}