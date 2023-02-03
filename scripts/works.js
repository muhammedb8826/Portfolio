import project from './db.js';

const data = project;
const main = document.querySelector('.main-section');
const cards = document.getElementById('portfolio');
const menuBtnX = document.getElementById('menuBtnX');

for (let i = 0; i <= data.length - 1; i += 1) {
  const section = document.createElement('section');
  section.className = 'portfolio-list-section';
  const image = document.createElement('img');
  const image2 = document.createElement('img');
  image.className = 'mobile';
  image.setAttribute('src', `${data[i].image[0].imageSrc}`);
  image.setAttribute('alt', `${data[i].image[0].imageAlt}`);
  image.className = 'mobile';
  image2.setAttribute('src', `${data[i].image[1].imageSrc}`);
  image2.setAttribute('alt', `${data[i].image[1].imageAlt}`);
  image2.className = 'desktop';
  const div = document.createElement('div');
  div.className = 'project-description-container';
  const h2 = document.createElement('h2');
  h2.className = 'project-title';
  h2.textContent = `${data[i].name}`;
  const ul1 = document.createElement('ul');
  ul1.className = 'canopy-list';
  const li1 = document.createElement('li');
  li1.className = 'canopy';
  li1.textContent = `${data[i].featured[0].feature1}`;
  const li2 = document.createElement('li');
  li2.className = 'title-and-year';
  li2.textContent = `${data[i].featured[0].feature2}`;
  const li3 = document.createElement('li');
  li3.className = 'title-and-year';
  li3.textContent = `${data[i].featured[0].year}`;
  ul1.append(li1, li2, li3);
  const p = document.createElement('p');
  p.className = 'project-description';
  p.textContent = `${data[i].description}`;
  const ul2 = document.createElement('ul');
  ul2.className = 'teck-stacks';
  const li11 = document.createElement('li');
  li11.className = 'canopy';
  li11.textContent = `${data[i].technologies[0].teck1}`;
  const li22 = document.createElement('li');
  li22.className = 'title-and-year';
  li22.textContent = `${data[i].technologies[0].teck2}`;
  const li33 = document.createElement('li');
  li33.className = 'title-and-year';
  li33.textContent = `${data[i].technologies[0].teck3}`;
  ul2.append(li11, li22, li33);
  const button = document.createElement('button');
  button.className = 'btn';
  button.setAttribute('id', `btn${i}`);
  button.textContent = 'See Project';
  const popUpSection = document.createElement('div');
  popUpSection.className = 'pop-up-section';
  popUpSection.setAttribute('id', `pop-up${i}`);
  popUpSection.append(image, image2);

  div.append(h2, ul1, p, ul2, button);
  section.append(image, image2, div);
  cards.append(section);
  main.append(popUpSection);
}

const btn0 = document.getElementById(`btn${0}`);
const btn1 = document.getElementById(`btn${1}`);
const btn2 = document.getElementById(`btn${2}`);
const btn3 = document.getElementById(`btn${3}`);
const popUp0 = document.getElementById(`pop-up${0}`);
const popUp1 = document.getElementById(`pop-up${1}`);
const popUp2 = document.getElementById(`pop-up${2}`);
const popUp3 = document.getElementById(`pop-up${3}`);
const popUpBg = document.querySelector('.popup-bg');
const image = document.createElement('img');
const image2 = document.createElement('img');
const div = document.createElement('div');
const div1 = document.createElement('div');
const h2 = document.createElement('h2');
const ul1 = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const p = document.createElement('p');
const ul2 = document.createElement('ul');
const li11 = document.createElement('li');
const li22 = document.createElement('li');
const li33 = document.createElement('li');
const seeLive = document.createElement('a');
const seeSource = document.createElement('a');
const githubIcon = document.createElement('img');
const liveIcon = document.createElement('img');

btn0.addEventListener('click', () => {
  popUp0.classList.toggle('show');
  popUpBg.classList.toggle('show');
  menuBtnX.classList.toggle('show');
  image.className = 'mobile';
  image.setAttribute('src', `${data[0].image[0].imageSrc}`);
  image.setAttribute('alt', `${data[0].image[0].imageAlt}`);
  image.className = 'mobile';
  image2.setAttribute('src', `${data[0].image[1].imageSrc}`);
  image2.setAttribute('alt', `${data[0].image[1].imageAlt}`);
  image2.className = 'desktop';
  div.className = 'project-description-container';
  h2.className = 'project-title';
  h2.textContent = `${data[0].name}`;
  ul1.className = 'canopy-list';
  li1.className = 'canopy';
  li1.textContent = `${data[0].featured[0].feature1}`;
  li2.className = 'title-and-year';
  li2.textContent = `${data[0].featured[0].feature2}`;
  li3.className = 'title-and-year';
  li3.textContent = `${data[0].featured[0].year}`;
  p.className = 'project-description';
  p.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
  ul2.className = 'teck-stacks';
  li11.className = 'canopy';
  li11.textContent = `${data[0].technologies[0].teck1}`;
  li22.className = 'title-and-year';
  li22.textContent = `${data[0].technologies[0].teck2}`;
  li33.className = 'title-and-year';
  li33.textContent = `${data[0].technologies[0].teck3}`;
  div1.className = 'live-and-source-btn';
  seeLive.className = 'btn';
  seeSource.className = 'btn';
  seeLive.textContent = 'See Live';
  seeSource.textContent = 'See Source';
  liveIcon.setAttribute('src', '../assets/live-icon.png');
  liveIcon.className = 'live-icon';
  seeLive.append(liveIcon);
  githubIcon.setAttribute('src', '../assets/github-icon.png');
  githubIcon.className = 'github-icon';
  seeSource.append(githubIcon);
  ul2.append(li11, li22, li33);
  ul1.append(li1, li2, li3);
  div.append(p, ul2);
  div1.append(seeLive, seeSource);
  popUp0.append(h2, ul1, image, image2, div, div1);
});
btn1.addEventListener('click', () => {
  popUp1.classList.toggle('show');
});
btn2.addEventListener('click', () => {
  popUp2.classList.toggle('show');
});
btn3.addEventListener('click', () => {
  popUp3.classList.toggle('show');
});
menuBtnX.addEventListener('click', () => {
  popUp0.classList.toggle('show');
  popUpBg.classList.toggle('show');
  menuBtnX.classList.toggle('show');
});