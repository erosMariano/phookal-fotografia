import { generateImageCards } from "./loadImages.js";
import { juliaGuilherme } from "../../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(juliaGuilherme);
});