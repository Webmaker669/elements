elements.white_hole = {
    color: ["#FFFFFF", "#FFFFE0", "#E0FFFF"],
    behavior: [
        "XX|CR:plasma|XX",
        "CR:light|XX|CR:light",
        "XX|CR:plasma|XX"
    ],
    category: "special",
    state: "solid",
    density: 99999,
    desc: "A cosmic anomaly that violently repels matter and constantly emits intense light and plasma.",
    ignore: ["white_hole"],
    canPlace: true,
    temp: 5000,
    reactions: {
        "fire": { elem1: "white_hole", elem2: "plasma" },
        "plasma": { elem1: "white_hole", elem2: "plasma" },
        "stone": { elem1: "white_hole", elem2: "sand" }
    }
};

elements.light = {
    color: ["#FFFF99", "#FFFFFFFF", "#FFFACD"],
    behavior: behaviors.LIGHT,
    category: "energy",
    state: "gas",
    density: 0,
    desc: "Pure photons emitted by high-energy sources like a white hole.",
    temp: 1000,
    tempLow: 10,
    stateLow: "fire"
};
