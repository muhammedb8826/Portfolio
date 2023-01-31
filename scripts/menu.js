const nav = document.querySelector('nav');
const menuLink = document.getElementsByClassName('menu-link');
const menuBtn = document.getElementById('menuBtn');
const menuBg = document.querySelector('.menu-bg');
menuBtn.onclick = () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('change');
  menuBg.classList.toggle('change-bg');
};
for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('change');
    menuBtn.classList.toggle('change-bg');
  });
}