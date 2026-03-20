import { generateImageCards } from "./loadImages.js";
import { luizaGabrielImages } from "../../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(luizaGabrielImages);
});