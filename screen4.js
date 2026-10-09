tool.pressure = {
  color: "#50A747", // Main tool display color
  func: function(pixel) {
    if (!pixel || typeof pixel !== 'object') return;

    if (pixel.pressure === undefined || pixel.pressure === null || Number.isNaN(pixel.pressure)) {
      pixel.pressure = 0;
    }

    // Optional: Cycle through your color list based on pressure
    const colorList = ["#006400", "#50A747", "#90EE90"];
    
    // Example logic using your colors
    pixel.pressure++;
    if (pixel.pressure > 20) {
      pixel.color = colorList[0]; // Dark Green
    } else if (pixel.pressure > 10) {
      pixel.color = colorList[1]; // Medium Green
    } else {
      pixel.color = colorList[2]; // Light Green
    }
  }
};
