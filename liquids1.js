elements.gasoline = {
    color: ["#f5e35f","#f5c85f"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 740,
    burn: 85,
    burnTime: 350,
    burnInto: ["smoke","fire"],
    fireColor: "#FF4500"
};

elements.methanol = {
    color: ["#dbe9f4","#cfe2f0"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 792,
    burn: 70,
    burnTime: 250,
    burnInto: ["steam","carbon_dioxide","fire"],
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
    burnInto: ["steam","carbon_dioxide","fire"],
    fireColor: "#4a6bff"
};
