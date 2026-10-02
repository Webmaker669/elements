elements.tsunami = {
  color: "transparent",
  behavior: behaviors.STATIC,
  category: "solids",
  state: "solid",
  tick: function(pixel) {
    createPixel("water", pixel.x, pixel.y + 1);
    deletePixel(pixel.x, pixel.y);
  }
};
