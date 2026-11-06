Object.keys(elements).forEach(function(elemName) {
  elements[elemName].hidden = true;
});

console.log(tools);

if (elements.water) elements.water.hidden = false;
if (elements.sand) elements.sand.hidden = false;
if (tools.heat) tools.heat.hidden = false;
if (tool.cool) tool.cool.hidden = false;


elements.sell = {
  color: ["#ff0000"],
  behavior: behaviors.POWDER,
  category: "shop",
  state: "solid",
  density: 1,
};

if (!elements.sand.reactions) elements.sand.reactions = {}

elements.sand.reactions.fire = {
  elem1: "glass",
  elem2: null,
  after: function() {
    elements.glass.hidden = false;
  }
};
