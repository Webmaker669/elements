elements.frying_oil = {
  color: ["#f4de92", "#e8ae2a"],
  behavior: behaviors.LIQUID,
  state: "liquid",
  category: "liquids",
  density: 820,
};

elements.french_fries = {
  color: ["#F0B054", "#FFD700"],
  behavior: behaviors.SOLID,
  state: "powder",
  category: "food",
  density: 300,
  reactions: {
    "frying_oil": { elem1: "cooked_fries", elem2: null }
  }
};

elements.cooked_fries = {
  color: ["#8B4513", "#D2691E"],
  behavior: behaviors.POWDER,
  state: "soild",
  category: "food",
  density: 290,
};
