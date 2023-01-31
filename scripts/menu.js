const nav = document.querySelector('nav');
const menuLink = document.getElementsByClassName('menu-link');
const menuBtn = document.getElementById('menuBtn');
menuBtn.onclick = () => {
  nav.classList.toggle('active');
};
for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}