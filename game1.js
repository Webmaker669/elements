for (var elemName in elements) {
  elements[elemName].hidden = true;
}
if (elements.water) elements.water.hidden = false; 
if (elements.sand) elements.sand.hidden = false;

elements.sell = {
  color: ["#ff0000"],
  behavior: behaviors.POWDER,
  category: "shop",
  state: "solid",
  density: 1,
  hidden: true
};
