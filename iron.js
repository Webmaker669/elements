elements.iron = {
    name: "Iron",
    color: "#71797E",
    behavior: behaviors.WALL,
    category: "solids",
    density: 7874,
    temp: 20,
    tempHigh: 1538,
    stateHigh: "molten_iron",
};

elements.molten_iron = {
    name: "Molten Iron",
    color: "#ff4500",
    behavior: behaviors.LIQUID,
    category: "liquids",
    density: 6980,
    temp: 1600,
    tempLow: 1538,
    stateLow: "iron",
    fireColor: "#ff4500",
};
