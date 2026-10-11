elements.e_filter = {
  color: "#ff0000",
  category: "machines",
  state: "solid",
  behavior: behaviors.WALL,
  click: function(pixel) {
    let name = prompt("Filter element:");
    if (name) {
      pixel.target = name;
    }
  },
  tick: function(pixel) {
    if (!pixel.target) return;
    let p = pixelMap[pixel.x]?.[pixel.y - 1];
    let below = pixelMap[pixel.x]?.[pixel.y + 1];
    if (p && p.element === pixel.target && !below) {
      tryMove(p, pixel.x, pixel.y + 1);
    }
  }
};
