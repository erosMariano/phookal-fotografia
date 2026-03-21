import { generateImageCards } from "../casamentos/casal/loadImages.js";
import { camilaVitor } from "../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(camilaVitor);
});