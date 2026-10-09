elements.pressure = {
  color: "#50A747",
  category: "tools",
  tool: function(pixel) {
    if (pixel.pressure === undefined || Number.isNaN(pixel.pressure)) {
      pixel.pressure = 0;
    }
    pixel.pressure += 0.1;

    if (pixel.pressure > 10) {
      pixel.color = pixelColorPick(pixel, "#006400");
    } else if (pixel.pressure > 5) {
      pixel.color = pixelColorPick(pixel, "#50A747");
    } else {
      pixel.color = pixelColorPick(pixel, "#90EE90");
    }
  },
  desc: "Use on pixels to build up pressure."
};

elements.screen = {
  color: ["#8B4513", "#D2691E"],
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL
};
