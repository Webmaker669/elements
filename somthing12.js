console.log("loaded");

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
    tempHigh: 5000,
    stateHigh: "diamond",
    viscosity: 50000,
    desc: "Extremely hot, molten carbon that can crystallize into diamond at extreme temperatures."
};

elements.selenium = {
    color: ["#4a4a4a", "#3d3d3d"],
    behavior: behaviors.POWDER,
    category: "Elements+",
    state: "powder",
    density: 4.81,
    tempHigh: 216,
    stateHigh: "molten_selenium",
    desc: "Selenium is a nonmetal with semiconductor properties, found in metal sulfide ores.",
    reactions: {
        "oxygen": {
            "elem1": "selenium_dioxide",             
            "elem2": null, 
            "tempMin": 215
        }
    }
};

elements.molten_selenium = {
    color: ["#ff6600", "#ff3300"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
    state: "liquid",
    density: 4.00,
    temp: 216,
    tempLow: 215,
    stateLow: "selenium",
    desc: "Molten selenium.",
    reactions: {
        "oxygen": {
            "elem1": "selenium_dioxide",
            "elem2": null,
            "tempMin": 216
        }
    }
};

elements.selenium_dioxide = {
    color: ["#96ab54", "#718040"],
    behavior: behaviors.GAS,
    category: "Elements+",
    state: "gas",
    density: 3.95,
    desc: "A white crystalline compound that forms when selenium is heated in the presence of oxygen.",
    reactions: {
        "water": {
            "elem1": "selenous_acid",
            "elem2": null
        }
    }
};

elements.selenous_acid = {
    color: ["#b5c474", "#96ab54"],
    behavior: behaviors.LIQUID,
    category: "Elements+",
    state: "liquid",
    density: 3.00,
    desc: "An acid formed by dissolving selenium dioxide in water."
};

elements.diamond = {
    color: ["#b9f2ff", "#ffffff", "#8bf0ff"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A hard, crystalline form of pure carbon.",
    reactions: {
        "hydrogen": {
            "elem1": "red_diamond",
            "elem2": null,
            "tempMin": 500
        }
    }
};

elements.red_diamond = {
    color: ["#F84B3F", "#FC6A5F", "#DA3A2F"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A hard, crystalline form of pure carbon colored by hydrogen at high temperatures."
};
