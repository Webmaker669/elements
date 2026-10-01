console.log("iron.js loaded");

// 1. Check if the game's category array exists, then add your custom tab
if (typeof elementCategories !== "undefined" && !elementCategories.includes("Elements+")) {
    elementCategories.push("Elements+");
}

// 2. Define your elements and assign them to your new category
elements.carbon = {
    color: ["#262120", "#171312"],
    behavior: behaviors.WALL,
    category: "Elements+",
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
    color: ["#ff4500", "#ff8000", "#ffcc00"],
    behavior: behaviors.MOLTEN,
    category: "Elements+",
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
