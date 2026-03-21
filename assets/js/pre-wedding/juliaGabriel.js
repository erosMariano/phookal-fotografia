import { generateImageCards } from "../casamentos/casal/loadImages.js";
import { juliaEGabriel } from "../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(juliaEGabriel);
});