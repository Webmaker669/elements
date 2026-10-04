elements.uranium_fuel = {
  color: ["#90EE90", "#228B22"],
  category: "energy",
  state: "solid",
  density: 4000,
  tempHigh: 4000,
  stateHigh: "supernova",
  tempLow: 0,
  stateLow: "uranium",
  tick: function(pixel) {
    pixel.temp += 15; // Balanced heat output
    pixelTempCheck(pixel);
  },
  behavior: behaviors.WALL
};

elements.coolant = {
  color: ["#50BCEC", "#66C6F2", "#3E98C0"],
  category: "liquids",
  state: "liquid",
  density: 1000,
  temp: -100,
  tempHigh: 800, // Raised so it can handle heavy heat without instantly boiling
  stateHigh: "smoke",
  behavior: behaviors.LIQUID // Allows the coolant to flow around the uranium
};
