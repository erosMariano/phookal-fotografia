import { generateImageCards } from "../casamentos/casal/loadImages.js";
import { nathaliaRenan } from "../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(nathaliaRenan);
});