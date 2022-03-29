import giorno from "./images/stickMan.png";

const aboutSection = () => {
  const aboutSectionHeader = document.createElement("h2");
  aboutSectionHeader.textContent = "About";
  aboutSectionHeader.classList.add("about");
  content.appendChild(aboutSectionHeader);
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("flex", "aboutSection");
  const aboutDescription = document.createElement("p");
  aboutDescription.textContent =
    "Born in Vancouver B.C., Giorno trained in the arts of pizza and pasta making from Italy and trained in many top restaurants around the world. When it was time, he decided to bring his talents over to Antartica to show the locals a taste of his hometown. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi vero saepe, excepturi delectus obcaecati dolores ex culpa sapiente illo magni modi repellendus possimus vitae at ullam eveniet suscipit expedita corporis deserunt! Nam tenetur est, sunt asperiores ducimus voluptatem eum.";
  aboutSection.appendChild(aboutDescription);
  const GiornoPicture = new Image();
  GiornoPicture.src = giorno;
  aboutSection.appendChild(GiornoPicture);
  content.appendChild(aboutSection);
};

export { aboutSection };
