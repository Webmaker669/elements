// 1. Register the category (elementCategories is an object keyed by id, not an array)
if (!elementCategories["metals"]) {
    elementCategories["metals"] = {
        name: "Metals",
        color: "#4a5d4e",
    };
}

// 2. Add Iron
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

// 3. Add Molten Iron
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
