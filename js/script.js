// Aside Menu
let menuSwitch = document.getElementById('menuSwitch');
let asideMenu = document.getElementById('asideMenu');
let switchIcon = document.getElementById('asideMenuIcon');
let asideBoardsInfo = document.getElementById('asideBoardsInfo');

// ===================================================
// Aside Menu
switchIcon.addEventListener('click', () => {
    asideMenu.classList.toggle('closeAsideMenu');
    asideBoardsInfo.classList.toggle('h2TextOff');
    switchIcon.classList.toggle('icon-rotate');

    const menuClosed = document.querySelector('.closeAsideMenu');

    if(menuClosed){
        localStorage.setItem('closedMenu', 'enabled');
        localStorage.setItem('textClose', 'enabled');
    }else{
        localStorage.setItem('closedMenu', null);
        localStorage.setItem('textClose', null);
    }
})

const storedMenu = localStorage.getItem('closedMenu');
const storedTxt = localStorage.getItem('textClose');

if(storedMenu === 'enabled' || storedTxt === 'enabled'){
  asideMenu.classList.add('closeAsideMenu');
  asideBoardsInfo.classList.add('h2TextOff');
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

// =====================================================
// Modal

let modal = document.getElementById('modal');
let btnBig = document.getElementById('btnBig');
let closeBtn = document.getElementById('closeBtn');

btnBig.addEventListener('click', () => {
    modal.style = `
        display: flex;
    `;  
})

closeBtn.addEventListener('click', () => {
    modal.style = `
        display: none;
    `; 
})

