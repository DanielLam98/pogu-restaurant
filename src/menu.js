import cheesePizza from "./images/cheesePizza.jpg";
import lasagna from "./images/lasagna.jpg";
import pasta from "./images/pasta.jpg";
import water from "./images/water.jpg";
import pepperoniPizza from "./images/pepperoniPizza.jpg";

const menuSection = () => {
  const menu = document.createElement("section");
  menu.classList.add("menuSection");
  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";
  menu.appendChild(menuHeader);
  const pizzaHeader = document.createElement("h2");
  pizzaHeader.textContent = "Pizza";
  menu.appendChild(pizzaHeader);
  dish(
    "Pepperoni Pizza",
    "Delicious Local Pepperoni on a thin slice of hand craft pizza",
    15,
    pepperoniPizza,
    menu
  );
  dish(
    "Cheese Pizza",
    "5 Types of cheese on a crunchy thin slice pizza",
    12,
    cheesePizza,
    menu
  );
  const pastaHeader = document.createElement("h2");
  pastaHeader.textContent = "Pasta";
  menu.appendChild(pastaHeader);
  dish(
    "Lasagna",
    "100 layers of cheese, pasta, bolognese sauce oven baked to perfection",
    11,
    lasagna,
    menu
  );
  dish(
    "OG Pasta",
    "Classic Antartic Pasta straight from the pearl of the sea",
    8,
    pasta,
    menu
  );
  const drinksHeader = document.createElement("h2");
  drinksHeader.textContent = "Drinks";
  menu.appendChild(drinksHeader);
  dish(
    "Water",
    "Water from the Antartic Glaciers (must bring your own bottle)",
    1,
    water,
    menu
  );
  content.appendChild(menu);
};

function dish(name, description, price, image, menu) {
  const dishSection = document.createElement("div");
  const dishName = document.createElement("h3");
  dishName.textContent = name;
  const dishDescription = document.createElement("p");
  dishDescription.textContent = description;
  const dishPrice = document.createElement("span");
  dishPrice.textContent = `$${price}`;
  const dishImage = new Image();
  dishImage.src = image;
  dishSection.appendChild(dishName);
  dishSection.appendChild(dishDescription);
  dishSection.appendChild(dishPrice);
  dishSection.appendChild(dishImage);
  menu.appendChild(dishSection);
}

export { menuSection };
