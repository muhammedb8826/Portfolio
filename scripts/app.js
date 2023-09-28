const body = document.getElementsByTagName('BODY')[0];
const nav = document.querySelector('nav');
const menuLink = document.getElementsByClassName('menu-link');
const menuBtn = document.getElementById('menuBtn');
const menuBg = document.querySelector('.menu-bg');

const language = document.getElementById('language-btn');
const languageList = document.querySelector('.languages-list');
const collabsibleArrow = document.getElementById('languages-arrow');
const frameworks = document.getElementById('frameworks-btn');
const skills = document.getElementById('skills-btn');
const frameworksList = document.querySelector('.frameworks-list');
const skillsList = document.querySelector('.skills-list');
const frameworksArrow = document.getElementById('frameworks-arrow');
const skillsArrow = document.getElementById('skills-arrow');

language.onclick = () => {
  language.classList.toggle('active');
  languageList.classList.toggle('closed');
  collabsibleArrow.classList.toggle('rotate');
};

frameworks.onclick = () => {
  frameworks.classList.toggle('active');
  frameworksList.classList.toggle('opened');
  frameworksArrow.classList.toggle('rotate');
}

skills.onclick = () => {
  skills.classList.toggle('active');
  skillsList.classList.toggle('opened');
  skillsArrow.classList.toggle('rotate');
}

menuBtn.onclick = () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('change');
  menuBg.classList.toggle('change-bg');
  body.classList.toggle('show');
};
for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('change');
    menuBg.classList.remove('change-bg');
    body.classList.remove('show');
  });
}
