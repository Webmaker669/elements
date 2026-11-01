elements.cow = {
    color: "#C4A484",
    behavior: behaviors.POWDER,
    state: "powder",
    category: "life",
    tick: function(pixel) {
        if (isEmpty(pixel.x, pixel.y + 1)) {
            movePixel(pixel, pixel.x, pixel.y + 1);
        }
    }
};

elements.chicken = {
    color: "#C4A584",
    behavior: behaviors.POWDER,
    state: "powder",
    category: "life",
    tick: function(pixel) {
        if (isEmpty(pixel.x, pixel.y + 1)) {
            movePixel(pixel, pixel.x, pixel.y + 1);
        }
    }
};
