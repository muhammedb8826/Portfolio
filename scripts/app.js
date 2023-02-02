const nav = document.querySelector("nav");
const menuLink = document.getElementsByClassName("menu-link");
const menuBtn = document.getElementById("menuBtn");
const menuBg = document.querySelector(".menu-bg");
const cards = document.getElementById("portfolio");
menuBtn.onclick = () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("change");
  menuBg.classList.toggle("change-bg");
};
for (let i = 0; i < menuLink.length; i += 1) {
  menuLink[i].addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("change");
    menuBg.classList.toggle("change-bg");
  });
}

const data = [
  {
    name: ["Tonic"],
    description: [
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    ],
    featured: [{ feature1: "CANOPY", feature2: "Back End Dev", year: 2023 }],
    image: [{ imageSrc: "../assets/m-project-1.png", imageAlt: "project-4" }],
    technologies: [{ teck1: "html", teck2: "css", teck3: "javascript" }],
    liveLink: [],
    sourceLink: [],
  },
  {
    name: ["Multi-Post Stories"],
    description: [
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    ],
    featured: [{ feature1: "CANOPY", feature2: "Back End Dev", year: 2023 }],
    image: [{ imageSrc: "../assets/m-project-2.png", imageAlt: "project-4" }],
    technologies: [{ teck1: "html", teck2: "css", teck3: "javascript" }],
    liveLink: [],
    sourceLink: [],
  },
  {
    name: ["Facebook 360"],
    description: [
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    ],
    featured: [{ feature1: "CANOPY", feature2: "Back End Dev", year: 2023 }],
    image: [{ imageSrc: "../assets/m-project-3.png", imageAlt: "project-4" }],
    technologies: [{ teck1: "html", teck2: "css", teck3: "javascript" }],
    liveLink: [],
    sourceLink: [],
  },
  {
    name: ["Uber Navigation"],
    description: [
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    ],
    featured: [{ feature1: "CANOPY", feature2: "Back End Dev", year: 2023 }],
    image: [{ imageSrc: "../assets/m-project-4.png", imageAlt: "project-4" }],
    technologies: [{ teck1: "html", teck2: "css", teck3: "javascript" }],
    liveLink: [],
    sourceLink: [],
  },
];

for (let i = 0; i < data.length; i++) {
  const section = document.createElement("section");
  section.className = "portfolio-list-section";
  const image = document.createElement("img");
  image.className = "mobile";
  image.setAttribute("src", `${data[i].image[0].imageSrc}`);
  image.setAttribute("alt", `${data[i].image[0].imageAlt}`);
  const div = document.createElement("div");
  div.className = "project-description-container";
  const h2 = document.createElement("h2");
  h2.className = "project-title";
  h2.textContent = `${data[i].name}`;
  const ul1 = document.createElement("ul");
  ul1.className = "canopy-list";
  const li1 = document.createElement("li");
  li1.className = "canopy";
  li1.textContent = `${data[i].featured[0].feature1}`;
  const li2 = document.createElement("li");
  li2.className = "title-and-year";
  li2.textContent = `${data[i].featured[0].feature2}`;
  const li3 = document.createElement("li");
  li3.className = "title-and-year";
  li3.textContent = `${data[i].featured[0].year}`;
  ul1.append(li1, li2, li3);
  const p = document.createElement("p");
  p.className = "project-description";
  p.textContent = `${data[i].description}`;
  const ul2 = document.createElement("ul");
  ul2.className = "teck-stacks";
  const li11 = document.createElement("li");
  li11.className = "canopy";
  li11.textContent = `${data[i].technologies[0].teck1}`;
  const li22 = document.createElement("li");
  li22.className = "title-and-year";
  li22.textContent = `${data[i].technologies[0].teck2}`;
  const li33 = document.createElement("li");
  li33.className = "title-and-year";
  li33.textContent = `${data[i].technologies[0].teck3}`;
  ul2.append(li11, li22, li33);
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = "See Project";

  div.append(h2, ul1, p, ul2, button);
  section.append(image, div);
  cards.append(section);
}
