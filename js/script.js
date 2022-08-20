// Aside Menu
let menuSwitch = document.getElementById('menuSwitch');
let asideMenu = document.getElementById('asideMenu');
let switchIcon = document.getElementById('asideMenuIcon');
let asideBoardsInfo = document.getElementById('asideBoardsInfo');

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

let sliderMobile = document.getElementById('sliderMobile');

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

sliderMobile.addEventListener('click', () => {
    sliderMobile.classList.toggle('slider-move');
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

// Add New Task modal
let modal = document.getElementById('modal');
let btnBig = document.getElementById('btnBig');
let closeBtn = document.getElementById('closeBtn');

// Single task modal
const closeBtnSingleTask = document.getElementById('closeBtnSingleTask');
const singleTaskModal = document.getElementById('singleTaskModal');

// Ovaj ID mora da bude dinamicki iz baze
const singleTask = document.getElementById('firstTask');


btnBig.addEventListener('click', () => { 
    modal.classList.add('modalTaskOpen'); 
 })

 closeBtn.addEventListener('click', () => {
    modal.classList.remove('modalTaskOpen'); 
 })

 singleTask.addEventListener('click', () => { 
    singleTaskModal.classList.add('modalTaskOpen'); 
 })

 closeBtnSingleTask.addEventListener('click', () => {
    singleTaskModal.classList.remove('modalTaskOpen'); 
 })



// =====================================================
// Mobile Menu
 const mobileMenuContainer = document.getElementById('mobileMenu');
 const hamburger = document.getElementById('hamburger');
 const closeMobileMenu = document.getElementById('closeMobileMenu');

 hamburger.addEventListener('click', () => { 
    mobileMenuContainer.classList.add('mobileMenuOpen'); 
 })

 closeMobileMenu.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('mobileMenuOpen'); 
 })



// =====================================================
// Single task

let pTxt = document.querySelector('pTxt');

// selector.addEventListener('change', () => {
    
//     if (this.checked) {
//         pTxt.classList.add('taskDone');
//     } else {
//         pTxt.classList.remove('taskDone');
//     }

// });
// document.addEventListener("DOMContentLoaded", function (event) {
//     var _selector = document.querySelector('input[name=myCheckbox]');
//     _selector.addEventListener('change', function (event) {
//         if (_selector.checked) {
//             pTxt.classList.add('taskDone');
//         } else {
//             pTxt.classList.remove('taskDone');
//         }
//     });
// });