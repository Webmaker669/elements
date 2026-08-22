// Ensure the categories list includes your custom tab
if (!elementCategories.includes("metals")) {
    elementCategories.push("metals");
}

// Set up the tab properties
elementCategories["metals"] = {
    name: "Metals",
    color: "#4a5d4e",
};

// Define Iron
elements.iron = {
    name: "Iron",
    color: "#71797E",
    behavior: behaviors.WALL,
    category: "metals",
    density: 7874,
    temp: 20,
    tempHigh: 1538,
    stateHigh: "molten_iron",
};

// Define Molten Iron
elements.molten_iron = {
    name: "Molten Iron",
    color: "#ff4500",
    behavior: behaviors.LIQUID,
    category: "metals",
    density: 6980,
    temp: 1600,
    tempLow: 1538,
    stateLow: "iron",
    fireColor: "#ff4500",
};
