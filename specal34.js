elements.pressure = {
  color: "#F2947C",
  category: "tools",
  canPlace: false,
  desc: "Adds pressure to pixels.",
  tool: function(pixel) {
    if (pixel.pressure === undefined || isNaN(pixel.pressure)) pixel.pressure = 0;
    pixel.pressure += 10;
  },
  toolHoverStat: function(pixel) {
    return "P:" + Math.round(pixel.pressure || 0);
  }
};
