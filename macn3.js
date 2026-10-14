elements.rdx = {
  color: ["#FF8300", "#FFA500"],
  category: "powders",
  state: "powder",
  behavior: behaviors.POWDER,
  density: 1500,
  tick: pixel => {
    if (pixel.charge) changePixel(pixel, "explosion");
  }
};
