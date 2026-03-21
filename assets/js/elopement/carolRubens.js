import { generateImageCards } from "../casamentos/casal/loadImages.js";
import { carolRubens } from "../../data/index.js";

document.addEventListener("DOMContentLoaded", function () {
  generateImageCards(carolRubens);
});