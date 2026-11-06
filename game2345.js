Object.keys(elements).forEach(function(elemName) {
  elements[elemName].hidden = true;
});

if (elements.water) elements.water.hidden = false;
if (elements.sand) elements.sand.hidden = false;
if (elements.heat) elements.heat.hidden = false;
if (elements.cool) elements.cool.hidden = false;
if (elements.fire) elements.fire.hidden = false;

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
