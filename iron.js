elements.iron = {
    color: ["#71797E", "#5A6165", "#8C9296"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 7874,
    desc: "A strong metal. Can rust when exposed to water or melt at very high temperatures.",
    tempHigh: 1538,
    stateHigh: "molten_iron",
    reactions: {
        "water": { elem1: "rust", elem2: "water" },
        "salt_water": { elem1: "rust", elem2: "salt_water" },
        "acid": { elem1: "fire", elem2: "smoke" }
    }
};

elements.molten_iron = {
    color: ["#FF4500", "#FF8C00", "#FFD700"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 6980,
    desc: "Superheated liquid iron. Extremely hot and dangerous!",
    tempLow: 1537,
    stateLow: "iron",
    temp: 1600,
    tempHigh: 2862,
    stateHigh: "fire"
};

elements.rust = {
    color: ["#B7410E", "#8B0000", "#A0522D"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 5240,
    desc: "Iron oxide, formed when iron is exposed to moisture and oxygen over time.",
    tempHigh: 1550,
    stateHigh: "molten_iron"
};

elements.aerogel = {
    color: ["#E0FFFF", "#AFEEEE", "#B0E0E6"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 3,
    desc: "A synthetic porous material of extremely low density, known for incredible thermal insulation.",
    tempHigh: 1200,
    stateHigh: "fire",
};
