var data = require("../javascripts/json/projets.json");

const dataString = document.querySelectorAll("[data-key]");

const copy = () => {
  dataString.forEach((element, index) => {
    let value = element.getAttribute("data-key");

    element.innerHTML = data[index][value];
  });
};

copy();
