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

elements.dimethyl_sulfoxide = {
    color: ["#eef4f7","#e2ebf0"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    tempLow: 18.5,
    stateLow: "dimethyl_sulfoxide_crystal",
    tempHigh: 189,
    stateHigh: "steam"
};

elements.dimethyl_sulfoxide_crystal = {
    color: ["#f2f8fb","#dcebf2","#e8f3f8"],
    behavior: behaviors.WALL,
    category: "states",
    state: "solid",
    density: 1180,
    temp: 10,
    tempHigh: 18.5,
    stateHigh: "dimethyl_sulfoxide",
    hidden: true
};

elements.liquid_pain = {
    color: ["#8b0a1a","#a30d1f"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1250,
    viscosity: 800,
    reactions: {
        body: { elem2: "blood", chance: 0.4 },
        head: { elem2: "blood", chance: 0.4 },
        meat: { elem2: null, chance: 0.2 }
    },
    tick: function(pixel) {
        if (Math.random() < 0.004 && isEmpty(pixel.x, pixel.y - 1)) {
            changePixel(pixel, "liquid_pain_crystal");
        }
    }
};

elements.liquid_pain_crystal = {
    color: ["#b3122a","#d12a40"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 1400,
    tempHigh: 120,
    stateHigh: "explosion"
};
