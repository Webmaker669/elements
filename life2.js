elements.cow = {
    color: "#C4A484",
    behavior: behaviors.POWDER,
    state: "powder",
    category: "life",
    tick: function(pixel) {
        doMovement(pixel);
    }
};

elements.chicken = {
    color: "#C4A584",
    behavior: behaviors.POWDER,
    state: "powder",
    category: "life",
    tick: function(pixel) {
        doMovement(pixel);
    }
};
