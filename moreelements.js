console.log("carbon.js loaded");

elements.carbon = {
    color: ["#262120", "#171312"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 1800,
    hardness: 10,
    temp: 20,
    tempHigh: 3500,
    stateHigh: "molten_carbon",
    desc: "Carbon, the building block of life and diamonds.",
    reactions: {
        "fire": { elem1: "carbon", elem2: "ember" }
    }
};

elements.molten_carbon = {
    color: ["#ff4500", "#ff8c00", "#ffcc00"],
    behavior: behaviors.MOLTEN,
    category: "liquids",
    state: "liquid",
    density: 1700,
    temp: 3500,
    tempLow: 3400,
    stateLow: "carbon",
    tempHigh: 6000,
    stateHigh: "diamond",
    viscosity: 50000,
    desc: "Extremely hot, molten carbon that can crystallize into diamond at extreme temperatures."
};
