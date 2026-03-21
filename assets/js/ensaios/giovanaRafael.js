import { generateImageCards } from "../casamentos/casal/loadImages.js";
import { giovanaRafael } from "../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(giovanaRafael);
});