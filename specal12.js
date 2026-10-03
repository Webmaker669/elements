tool.pressure = {
  color: "#F2947C",
  func: function(pixel) {
    // Ensure pixel exists and is a valid object to prevent runtime errors
    if (!pixel || typeof pixel !== 'object') return;

    // Initialize pressure if it's missing, null, or NaN
    if (pixel.pressure === undefined || pixel.pressure === null || Number.isNaN(pixel.pressure)) {
      pixel.pressure = 0;
    }
  }
};
