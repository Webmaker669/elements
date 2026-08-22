elements.coblot = {
    name: "Coblot",
    color: "#71797E",
    behavior: behaviors.WALL,
    category: "solids",
    density: 7874,
    temp: 20,
    tempHigh: 1538,
    stateHigh: "molten_coblot",
};

elements.molten_coblot = {
    name: "Molten Coblot",
    color: "#ff4500",
    behavior: behaviors.LIQUID,
    category: "liquids",
    density: 6980,
    temp: 1600,
    tempLow: 1538,
    stateLow: "coblot",
    fireColor: "#ff4500",
};
