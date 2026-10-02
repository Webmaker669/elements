console.log("loaded");

elements.carbon = {
    color: ["#222020", "#121010"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 2.26,
    hardness: 2,
    tempHigh: 3500,
    stateHigh: "molten_carbon",
    desc: "Graphite/Carbon, a standard solid form of carbon with a very high sublimation/melting point.",
    reactions: {
        "fire": { elem1: "carbon", elem2: "ember" }
    }
};

elements.molten_carbon = {
    color: ["#ff3300", "#ff6600", "#ffcc00"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
    state: "liquid",
    density: 2.00,
    temp: 3500,
    tempLow: 3400,
    stateLow: "diamond", 
    tempHigh: 4827,
    stateHigh: "carbon_gas",
    viscosity: 50000,
    desc: "Extremely hot liquid carbon that crystallizes into diamond upon controlled cooling."
};

elements.carbon_gas = {
    color: ["#ffaa00", "#ff5500"],
    behavior: behaviors.GAS,
    category: "Elements+",
    state: "gas",
    density: 1.00,
    temp: 4827,
    tempLow: 4800,
    stateLow: "molten_carbon",
    desc: "Vaporized carbon gas at extreme temperatures."
};

elements.selenium = {
    color: ["#4a4a4a", "#2b2b2b"],
    behavior: behaviors.POWDER,
    category: "Elements+",
    state: "powder",
    density: 4.81,
    tempHigh: 221,
    stateHigh: "molten_selenium",
    desc: "Selenium, a gray-to-black metalloid that melts at 221°C.",
    reactions: {
        "oxygen": {
            "elem1": "selenium_dioxide",             
            "elem2": null, 
            "tempMin": 215
        }
    }
};

elements.molten_selenium = {
    color: ["#cc3300", "#ff4500"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
    state: "liquid",
    density: 3.99,
    temp: 221,
    tempLow: 220,
    stateLow: "selenium",
    tempHigh: 685,
    stateHigh: "selenium_gas",
    desc: "Molten selenium liquid.",
    reactions: {
        "oxygen": {
            "elem1": "selenium_dioxide",
            "elem2": null,
            "tempMin": 221
        }
    }
};

elements.selenium_gas = {
    color: ["#b8860b", "#daa520"],
    behavior: behaviors.GAS,
    category: "Elements+",
    state: "gas",
    density: 3.00,
    temp: 685,
    tempLow: 680,
    stateLow: "molten_selenium",
    desc: "Vaporized selenium gas."
};

elements.selenium_dioxide = {
    color: ["#e2e8d7", "#c2d1b1"],
    behavior: behaviors.GAS,
    category: "Elements+",
    state: "gas",
    density: 3.95,
    temp: 315,
    tempLow: 310,
    stateLow: "selenium",
    desc: "A white crystalline compound/gas formed when selenium reacts with oxygen.",
    reactions: {
        "water": {
            "elem1": "selenous_acid",
            "elem2": null
        }
    }
};

elements.selenous_acid = {
    color: ["#d0e198", "#b5c474"],
    behavior: behaviors.LIQUID,
    category: "Elements+",
    state: "liquid",
    density: 3.00,
    temp: 20,
    tempHigh: 100,
    stateHigh: "selenium_dioxide",
    desc: "An acid formed by dissolving selenium dioxide in water."
};

elements.nitrogen = {
    color: ["#e0e0e0", "#f0f0f0"],
    behavior: behaviors.GAS,
    category: "Elements+",
    state: "gas",
    density: 1.25,
    desc: "A colorless, odorless gas."
};

elements.boron = {
    color: ["#3b3b3b", "#2c2c2c"],
    behavior: behaviors.POWDER,
    category: "Elements+",
    state: "powder",
    density: 2.34,
    desc: "A dark metalloid element."
};

elements.uranium = {
    color: ["#32cd32", "#228b22"],
    behavior: behaviors.POWDER,
    category: "Elements+",
    state: "solid",
    density: 19.1,
    tempHigh: 1132,
    stateHigh: "molten_uranium",
    desc: "A dense, radioactive actinide metal."
};

elements.molten_uranium = {
    color: ["#ff4500", "#ff8c00"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
    state: "liquid",
    density: 17.3,
    temp: 1132,
    tempLow: 1130,
    stateLow: "uranium",
    desc: "Molten radioactive uranium metal."
};

elements.diamond = {
    color: ["#b9f2ff", "#ffffff", "#8bf0ff"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A pure carbon allotrope with extreme hardness, stable at high temperatures without melting.",
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
    desc: "An extremely rare red diamond created by structural lattice deformation."
};

elements.yellow_diamond = {
    color: ["#ffe873", "#ffd700", "#ffc72c"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A yellow diamond colored by nitrogen impurities."
};

elements.blue_diamond = {
    color: ["#73c2fb", "#1e90ff", "#00bfff"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A blue diamond colored by trace boron impurities."
};

elements.green_diamond = {
    color: ["#50c878", "#2e8b57", "#006400"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 3.51,
    hardness: 10,
    desc: "A green diamond colored by natural or radiation exposure."
};

elements.titanium = {
    color: ["#D1D2D1", "#B2B3B2", "#909290"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 4.51,
    hardness: 6,
    tempHigh: 1668,
    stateHigh: "molten_titanium",
    desc: "A strong, corrosion-resistant lustrous transition metal."
};

elements.molten_titanium = {
    color: ["#ff4500", "#ff8c00", "#ffd700"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
    state: "liquid",
    density: 4.11,
    temp: 1668,
    tempLow: 1667,
    stateLow: "titanium",
    desc: "Molten liquid titanium metal.",
    reactions: { 
        "nitrogen": {
            "elem1": "titanium_nitride",
            "elem2": null,
            "tempMin": 1080
        }
    }
};

elements.titanium_nitride = {
    color: ["#FFD700", "#DAA520", "#B8860B"],
    behavior: behaviors.WALL,
    category: "Elements+",
    state: "solid",
    density: 5.40,
    hardness: 9,
    tempHigh: 2930,
    stateHigh: "molten_titanium_nitride",
    desc: "Titanium nitride, an extremely hard ceramic material with a golden appearance used for surface coatings."
};

elements.molten_titanium_nitride = {
    color: ["#ff4500", "#ff8c00", "#ffd700"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
    state: "liquid",
    density: 4.90,
    temp: 2930,
    tempLow: 2920,
    stateLow: "titanium_nitride",
    desc: "Molten liquid titanium nitride."
};
