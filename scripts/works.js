import project from './db.js';

const data = project;
const main = document.querySelector('.main-section');
const cards = document.getElementById('portfolio');

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

  div.append(h2, ul1, p, ul2, button);
  section.append(image, image2, div);
  const popUpSection = document.createElement('div');
  popUpSection.className = 'pop-up-section';
  popUpSection.setAttribute('id', `pop-up${i}`);
  cards.append(section);
  main.appendChild(popUpSection);
}

const btn0 = document.getElementById(`btn${0}`);
const btn1 = document.getElementById(`btn${1}`);
const btn2 = document.getElementById(`btn${2}`);
const btn3 = document.getElementById(`btn${3}`);
const popUp0 = document.getElementById(`pop-up${0}`);
const popUp1 = document.getElementById(`pop-up${1}`);
const popUp2 = document.getElementById(`pop-up${2}`);
const popUp3 = document.getElementById(`pop-up${3}`);

btn0.addEventListener('click', () => {
  popUp0.classList.toggle('show');
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