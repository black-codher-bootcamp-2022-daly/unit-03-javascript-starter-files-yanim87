import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

const button = document.createElement('button')

const buttonText = document.createTextNode ('Show population')

button.appendChild(buttonText)

button.onclick = displayPopulation

document.body.appendChild(button)
