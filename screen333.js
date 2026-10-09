tool.pressure = {
  color: "#50A747", // Default tool color
  func: function(pixel) {
    if (!pixel || typeof pixel !== 'object') return;

    if (pixel.pressure === undefined || pixel.pressure === null || Number.isNaN(pixel.pressure)) {
      pixel.pressure = 0;
    }

    // Example: change pixel color based on pressure levels using your colors
    if (pixel.pressure > 10) {
      pixel.color = "#0064005"; // Dark Green
    } else if (pixel.pressure > 5) {
      pixel.color = "#50A747"; // Medium Green
    } else {
      pixel.color = "#90EE90"; // Light Green
    }
  }
};

elements.screen = {
  color: ["#8B4513", "#D2691E"],
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL
};
