const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')


//eventos
navEmail.addEventListener('click', toggleMenu);


//funciones
function toggleMenu() {
    desktopMenu.classList.toggle('inactive');
}
