import pizzaImage from "./images/pizzaImage.jpg";

//Homepage
const homepage = () => {
  mainSection();
  description();
  hours();
};

const mainSection = () => {
  const section = document.createElement("div");
  section.classList.add("mainSection", "flex");
  const restrauntTitle = document.createElement("h1");
  restrauntTitle.textContent = "POGU Restaurant";
  section.appendChild(restrauntTitle);
  const restrauntImage = new Image();
  restrauntImage.src = pizzaImage;
  section.appendChild(restrauntImage);
  content.appendChild(section);
};

const description = () => {
  const descriptionSection = document.createElement("section");
  descriptionSection.classList.add("descriptionSection");
  const descriptionHeader = document.createElement("h3");
  descriptionHeader.textContent = "About the Restaurant";
  descriptionSection.appendChild(descriptionHeader);
  const description = document.createElement("p");
  description.textContent =
    "Pogu Restaurant provides the best and most delicious pizza in all of Antartica. Hand crafted from the finest pizza makers delivered straight to your hands in a heartbeat, we value your satisfaction and provide the best customer service. Giorno is a fine chef trained in the arts of pizza and pasta making. We hope to expand to multiple locations in Antartica soon. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore consequatur nisi dignissimos deserunt consequuntur magnam, iusto possimus earum reprehenderit labore dolore sed ducimus unde? Aspernatur aliquam ipsum ullam eius a laboriosam ducimus ipsa saepe, asperiores eum dolorum suscipit molestiae, eos quaerat! Rem voluptate totam excepturi consectetur dicta culpa dolore reiciendis.";
  descriptionSection.appendChild(description);
  content.appendChild(descriptionSection);
};

const hours = () => {
  const hourSection = document.createElement("section");
  hourSection.classList.add("flex", "hours");
  const hoursHeader = document.createElement("h3");
  hoursHeader.textContent = "Hours";
  hourSection.appendChild(hoursHeader);
  const ul = document.createElement("ul");
  hours("Monday");
  hours("Tuesday");
  hours("Wednesday");
  hours("Thursday");
  hours("Friday");
  hours("Saturday");
  hours("Sunday");
  hourSection.appendChild(ul);
  content.appendChild(hourSection);
  function hours(day) {
    const li = document.createElement("li");
    if (
      day === "Monday" ||
      day === "Tuesday" ||
      day === "Wednesday" ||
      day === "Thursday" ||
      day === "Friday"
    ) {
      li.textContent = `${day}: 9am - 10pm`;
      ul.appendChild(li);
    } else {
      li.textContent = `${day}: 8am - 11pm`;
      ul.appendChild(li);
    }
  }
};

// Initialize and add the map
export { homepage };
