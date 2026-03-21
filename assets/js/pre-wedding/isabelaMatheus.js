import { generateImageCards } from "../casamentos/casal/loadImages.js";
import { isabelaMatheus } from "../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(isabelaMatheus);
});