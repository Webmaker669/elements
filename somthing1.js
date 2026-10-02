console.log("loaded");

elements.carbon = {
    color: ["#262120", "#171312"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 1800,
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
    category: "states",
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

elements.selenium = {
    color: ["#4a4a4a", "#3d3d3d"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 4.81,
    desc: "Selenium is found in metal sulfide ores, where it substitutes for sulfur.",
    reactions: {
        "oxygen": {
            "elem1": null,             
            "elem2": "selenium_dioxide", 
            "tempMin": 800             
        }
    }
};
