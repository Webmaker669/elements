for (var elemName in elements) {
  elements[elemName].Hidden = true;
}
if (element.water) elements.water.hidden = false; 
if (element.water) elements.water.hidden = false;

elements.sell = {
  color: ["#ff0000"],
  behavior: behaviors.POWDER,
  category: "shop",
  state: "solid",
  density: 1,
  hidden: true
};
