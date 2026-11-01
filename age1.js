elements.human.tick = function(pixel) {
    if (pixel.age === undefined) {
        pixel.age = 0;
    }

    pixel.age++;

    if (pixel.age > 1000) {
        changePixel(pixel, "dust");
        return;
    }

    doHeating(pixel);
    doMovement(pixel);
};

elements.human.hoverStat = function(pixel) {
    return "Age: " + (pixel.age ?? 0);
};
