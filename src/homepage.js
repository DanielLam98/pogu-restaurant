const homepage = () => {
  const content = document.querySelector("#content");
  const nav = () => {
    const ul = document.createElement("ul");
    createTab("Home");
    createTab("Menu");
    createTab("About");
    content.appendChild(ul);
    function createTab(name) {
      const li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    }
  };
  nav();
};

export default homepage;
