element.uranium_fuel = {
  color: ["#90EE90", "#228B22"],
  category: "energy",
  state: "solid",
  tempHigh: 4000,
  stateHigh: "supernova",
  tempLow: 0,
  stateLow: "uranium",
  tick: function(pixel) {
    pixel.temp += 10;
  },
  behavior: [
    "XX|XX|XX",
    "XX|RL:radiation%1|XX",
    "M2|M1|M2"
  ]
};
