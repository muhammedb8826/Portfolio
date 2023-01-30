const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('nav');
const menuLink = document.getElementsByClassName('menu-link');

menuBtn.onclick = ()=> {
    nav.classList.toggle('active');
}

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

