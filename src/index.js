import { homepage } from "./homepage";
import { map, initMap } from "./map";
import { menuSection } from "./menu";
import { aboutSection } from "./about";
import githubLogo from "./images/GitHub-Mark-Light-32px.png";
import "./reset.css";
import "./style.css";

//Setting the nav bar with 3 different tabs
const nav = () => {
  const content = document.querySelector("#content");
  const ul = document.createElement("ul");
  const nav = document.createElement("nav");
  createTab("Home");
  createTab("Menu");
  createTab("About");
  nav.appendChild(ul);
  content.appendChild(nav);
  function createTab(name) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    // if (name == "Home") {
    //   a.setAttribute("href", "");
    // } else if (name == "Menu") {
    //   a.setAttribute("href", "");
    // } else if (name == "About") {
    //   a.setAttribute("href", "");
    // }
    a.textContent = `${name}`;
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
  }
};

const aClick = () => {
  let a = document.querySelectorAll("a");
  a.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(element.textContent);
      changeTab(element.textContent);
    });
  });
};

const footer = () => {
  const footerSection = document.createElement("footer");
  footerSection.classList.add("flex");
  const githubPic = new Image();
  githubPic.src = githubLogo;
  footerSection.appendChild(githubPic);
  const linkToGitHub = document.createElement("a");
  linkToGitHub.setAttribute("href", "https://github.com/DanielLam98");
  linkToGitHub.textContent = "Created by Daniel Lam";
  footerSection.appendChild(linkToGitHub);
  console.log("footer end");
  content.appendChild(footerSection);
};

const changeTab = (tab) => {
  content.innerHTML = "";
  nav();
  typeTab(tab);
  aClick();
  footer();
  console.log("Made it to the end");
};

const typeTab = (tab) => {
  switch (tab) {
    case "Home":
      homepage();
      map();
      initMap();
      console.log("typeTab home called");
      break;
    case "Menu":
      menuSection();
      break;
    case "About":
      aboutSection();
      break;
    default:
      console.log(error);
  }
};

const main = () => {
  nav();
  homepage();
  map();
  initMap();
  aClick();
  footer();
};

main();
