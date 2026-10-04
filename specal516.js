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
    pixel.temp += 10;
    pixelTempCheck(pixel); // Evaluates temperature triggers for state changes
  },
  behavior: behaviors.WALL
};

elements.coolant = {
  color: ["#50BCEC", "#66C6F2", "#3E98C0"],
  category: "liquids",
  state: "liquid",
  density: 1000,
  temp: -100,
  tempHigh: 137,
  stateHigh: "smoke",
  behavior: behaviors.LIQUID
};
