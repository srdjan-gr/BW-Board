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


// =====================================================
// Theme Switch
let slider = document.getElementById('slider');
let bodyId = document.getElementById('bodyThemeSwitch');

slider.addEventListener('click', () => {
    slider.classList.toggle('slider-move');
    bodyId.classList.toggle('lightTheme');

 const tema = document.querySelector('.lightTheme')
    if(tema){
        localStorage.setItem('lightTheme', 'enabled');
    }else{
        localStorage.setItem('lightTheme', null);
    }

})
   
let storedTheme = localStorage.getItem('lightTheme');

if(storedTheme === 'enabled'){
    document.body.classList.add('lightTheme');
}

