import { generateImageCards } from "./loadImages.js";
import { milenaPaulo } from "../../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(milenaPaulo);
});