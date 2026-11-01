elements.human.tick = function(pixel) {
  if (pixel.age === undefined) {
    pixel.age = 0;
  }


  if (pixel.age > 1000) {
    changePixel(pixel, "meat");
    return;
  }
  doHeating(pixel);
  doMovement(pixel);
};
