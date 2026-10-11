elements.e_filter = {
  color: "#ff0000",
  category: "machines",
  state: "solid",
  behavior: behaviors.WALL,
  click: function(pixel) {
    pixel.target = prompt("Filter:");
  },
  tick: function(pixel) {
    if (pixel.target && pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y - 1]) {
      var p = pixelMap[pixel.x][pixel.y - 1];
      if (p.element === pixel.target) {
        changePixel(p, "gold");
      }
    }
  }
};
