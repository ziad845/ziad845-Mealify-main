let toggleMenu = document.querySelector('.bars-icon .links');
let toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.close-icon');

toggler.onclick = function () {
    toggleMenu.style.right = '0';
};

closeBtn.onclick = function () {
    toggleMenu.style.right = '-350px';
};

const darkMood = document.querySelector('.fa-moon');
const lightMood = document.querySelector('.fa-sun');

function changeRootColors() {
    const root = document.documentElement;
    root.style.setProperty('--main-color', 'rgb(193, 126, 31)');
    root.style.setProperty('--main-txt-color', '#fff');
    root.style.setProperty('--nav-hover-color', '#fff');
    root.style.setProperty('--btns-a-color', '#222');
    root.style.setProperty('--selection', 'rgba(193, 126, 31, 0.7)');
    root.style.setProperty('--bg-sec-odd', '#222');
    root.style.setProperty('--bg-sec-even', '#272727');
}

function resetRootColors() {
    const root = document.documentElement;
    root.style.setProperty('--main-color', 'rgb(206, 18, 18)');
    root.style.setProperty('--main-txt-color', '#37373f');
    root.style.setProperty('--nav-hover-color', '#000');
    root.style.setProperty('--btns-a-color', '#fff');
    root.style.setProperty('--selection', 'rgba(206, 18, 18, 0.7)');
    root.style.setProperty('--bg-sec-odd', '#eee');
    root.style.setProperty('--bg-sec-even', '#fff');
}

function displayNone() {
    darkMood.classList.add('d-none');
    lightMood.classList.remove('d-none');
}

function displayBlock() {
    lightMood.classList.add('d-none');
    darkMood.classList.remove('d-none');
}





