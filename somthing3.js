elements.carbon = {
    color: ["#262120", "#171312"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 2.21,
    hardness: 1,
    tempHigh: 3500,
    stateHigh: "molten_carbon",
    desc: "Carbon, the building block of life and diamonds.",
    reactions: {
        "fire": { elem1: "carbon", elem2: "ember" }
    }
};

elements.molten_carbon = {
    color: ["#ff4500", "#ff8000", "#ffcc00"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
    state: "liquid",
    density: 2.00,
    temp: 3500,
    tempLow: 3400,
    stateLow: "carbon",
    tempHigh: 6000,
    stateHigh: "diamond",
    viscosity: 50000,
    desc: "Extremely hot, molten carbon that can crystallize into diamond at extreme temperatures."
};

// Make sure diamond exists so molten_carbon has a valid stateHigh target!
elements.diamond = {
    color: ["#b9f2ff", "#ffffff", "#8bf0ff"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    tempHigh: 4000,
    stateHigh: "molten_carbon",
    desc: "A hard, crystalline form of pure carbon."
};
