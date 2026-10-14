elements.rdx = {
  color: ["#FF8300", "#FFA500"],
  category: "powders",
  state: "powder",
  behavior: behaviors.POWDER,
  if (pixel.charge) {
    changePixel(p, "explosion")
  }
}
