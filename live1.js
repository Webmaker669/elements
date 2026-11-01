// Ensure elements exist before assigning reactions
if (typeof elements !== "undefined" && elements.life && elements.human) {
    elements.life.reactions = {
        "human": { 
            elem1: "cell", 
            elem2: "dna",
            chance: 1 // 100% chance to react on touch
        }
    };
}
