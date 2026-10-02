elements.tsunami = {
  color: "transparent",
  behavior: behaviors.STATIC,
  category: "special",
  state: "solid",
  tick: function(pixel) {
    createPixel("water", pixel.x, pixel.y + 1);
    createPixel("water", pixel.x + 1, pixel.y);
    createPixel("water", pixel.x - 1, pixel.y);
    deletePixel(pixel.x, pixel.y);
  }
};
