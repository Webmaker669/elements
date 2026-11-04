elements.gasoline = {
    color: ["#f5e35f","#f5c85f"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 740,
    burn: 85,
    burnTime: 350,
    burnInto: ["smoke","fire"],
    fireColor: "#FF4500",
    reactions: {
        styrofoam: { elem1: "napalm", elem2: null, chance: 0.05 }
    }
};

elements.methanol = {
    color: ["#dbe9f4","#cfe2f0"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 792,
    burn: 70,
    burnTime: 250,
    burnInto: ["smoke","fire"],
    fireColor: "#6f8cff"
};

elements.ethanol = {
    color: ["#e8f0f5","#dde9f0"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 789,
    burn: 60,
    burnTime: 300,
    burnInto: ["smoke","fire"],
    fireColor: "#4a6bff"
};

elements.styrofoam = {
    color: ["#f4f4f0","#e8e8e3"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 30,
    burn: 40,
    burnTime: 120,
    burnInto: ["smoke","fire"],
    fireColor: "#FF8C1A"
};

elements.napalm = {
    color: ["#e8a33d","#d98b2b"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 820,
    viscosity: 5000,
    burn: 90,
    burnTime: 500,
    burnInto: ["smoke","fire"],
    fireColor: "#FF4500"
};
