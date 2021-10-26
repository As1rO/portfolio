var data = require("../javascripts/json/projets.json");
var numberOfProjetc;
const dataString = document.querySelectorAll("[data-key]");
for (const prop in data) {
  numberOfProjetc = prop;
}
export const copy = (current) => {
  dataString.forEach((element) => {
    let value = element.getAttribute("data-key");
    element.innerHTML = data[current][value];
    if (element.getAttribute("href")) {
      element.setAttribute("href", data[current].linkUrl);
    }

    if (element.getAttribute("src")) {
      element.setAttribute("src", data[current].image);
    }
  });
};

export { numberOfProjetc };
