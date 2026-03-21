import { generateImageCards } from "../casamentos/casal/loadImages.js";
import { cintiaGuilherme } from "../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(cintiaGuilherme);
});