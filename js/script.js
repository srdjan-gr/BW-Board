let menuSwitch = document.getElementById('menuSwitch');
let asideMenu = document.getElementById('asideMenu');
let switchIcon = document.getElementById('asideMenuIcon');
let asideBoardsInfo = document.getElementById('asideBoardsInfo');

menuSwitch.addEventListener('click', navToggle);

function navToggle(){
    asideMenu.classList.toggle('closeAsideMenu');
    switchIcon.classList.toggle('icon-rotate');
    asideBoardsInfo.classList.toggle('h2TextOff');
}