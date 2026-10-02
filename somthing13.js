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

elements.nitrogen = {
    color: ["#e0e0e0", "#f0f0f0"],
    behavior: behaviors.GAS,
    category: "Elements+",
    state: "gas",
    density: 1.25,
    desc: "A colorless, odorless gas that makes up most of Earth's atmosphere."
};

elements.boron = {
    color: ["#3b3b3b", "#4f4f4f"],
    behavior: behaviors.POWDER,
    category: "Elements+",
    state: "powder",
    density: 2.34,
    desc: "A low-abundance metalloid used in trace amounts to color diamonds blue."
};

elements.uranium = {
    color: ["#32cd32", "#006400"],
    behavior: behaviors.POWDER,
    category: "Elements+",
    state: "solid",
    density: 19.1,
    tempHigh: 1132,
    stateHigh: "molten_uranium",
    desc: "A radioactive metallic element that emits natural radiation."
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
        },
        "nitrogen": {
            "elem1": "yellow_diamond",
            "elem2": null,
            "tempMin": 600
        },
        "boron": {
            "elem1": "blue_diamond",
            "elem2": null,
            "tempMin": 400
        },
        "uranium": {
            "elem1": "green_diamond",
            "elem2": null,
            "tempMin": 100
        },
        "neutron": {
            "elem1": "green_diamond",
            "elem2": null,
            "tempMin": 200
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
    desc: "An extremely rare red diamond formed by lattice deformation via hydrogen at high temperatures."
};

elements.yellow_diamond = {
    color: ["#ffe873", "#ffd700", "#ffc72c"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A yellow diamond colored by nitrogen impurities trapped in the carbon lattice."
};

elements.blue_diamond = {
    color: ["#73c2fb", "#1e90ff", "#00bfff"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A rare blue diamond colored by trace amounts of boron."
};

elements.green_diamond = {
    color: ["#50c878", "#2e8b57", "#006400"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A green diamond whose color is caused by natural or artificial radiation exposure."
};
