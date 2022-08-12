// Aside Menu
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


// Theme Switch
let slider = document.getElementById('slider');

slider.addEventListener('click', () => {
    slider.classList.toggle('slider-move');
})

