element.uranium_fuel = {
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
  },
  behavior: behaviors.POWDER
};
