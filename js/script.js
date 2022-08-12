let menuSwitch = document.getElementById('menuSwitch');
let asideMenu = document.getElementById('asideMenu');
let switchIcon = document.getElementById('asideMenuIcon');

menuSwitch.addEventListener('click', navToggle);

function navToggle(){
    asideMenu.classList.toggle('closeAsideMenu');
    switchIcon.classList.toggle('icon-rotate');
}