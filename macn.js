elements.e_filter = {
  color: "#ff0000",
  behavior: behaviors.WALL,
  category: "machines", 
  state: "solid",
  tick: function(pixel) {
    tryMove(pixel, pixel.x, pixel.y - 1);  }

};
