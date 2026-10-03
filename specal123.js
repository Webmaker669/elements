elements.pressure = {
  color: "#F2947C",
  category: "tools",
  desc: "Adds pressure to pixels.",
  tool: function(pixel) {
    // Ensure pixel exists and is a valid object
    if (!pixel || typeof pixel !== "object") return;

    // Initialize pressure if it's missing, null, or NaN
    if (pixel.pressure === undefined || pixel.pressure === null || Number.isNaN(pixel.pressure)) {
      pixel.pressure = 0;
    }

    // Actually apply the tool's effect (adjust the amount as needed)
    pixel.pressure += 10;
  }
};
