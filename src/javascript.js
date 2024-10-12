const menubar = document.getElementById('menubar');
const navlinks = document.getElementById('navlinks');

menubar.addEventListener('click', () => {
    navlinks.classList.toggle('show');

    if (navlinks.classList.contains('show')) {
        menubar.src ="src/Close.svg";
    } else {
         menubar.src ="src/IcBaselineMenu.svg";
    }
});

