console.log("iron.js loaded");
elements.white_hole = {
    color: ["#FFFFFF", "#FFFFE0", "#E0FFFF"],
    behavior: [
        "XX|CR:plasma%5|XX",
        "CR:light%15|XX|CR:light%15",
        "XX|CR:plasma%5|XX"
    ],
    tick: function(pixel) {
        const r = 4; // repel radius
        for (let dx = -r; dx <= r; dx++) {
            for (let dy = -r; dy <= r; dy++) {
                if (dx === 0 && dy === 0) continue;
                const x = pixel.x + dx, y = pixel.y + dy;
                if (outOfBounds(x, y) || isEmpty(x, y)) continue;
                const p = pixelMap[x][y];
                if (!p || p.element === "white_hole") continue;
                const tx = x + Math.sign(dx), ty = y + Math.sign(dy);
                if (!outOfBounds(tx, ty) && isEmpty(tx, ty)) {
                    movePixel(p, tx, ty);
                }
            }
        }
    },
    category: "special",
    state: "solid",
    density: 99999,
    hardness: 1,
    insulate: true,
    temp: 5000,
    desc: "A cosmic anomaly that violently repels matter and constantly emits intense light and plasma.",
    ignore: ["white_hole"],
    reactions: {
        "fire": { elem1: "white_hole", elem2: "plasma" },
        "stone": { elem1: "white_hole", elem2: "sand" }
    }
};
