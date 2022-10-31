import randomize from "./randomize.js";

const randomButton = document.querySelector(".random-button");

const foods = ["Bread", "Eggs", "Plantain", "Yoghurt", "Butter"];
const points = [1,3,5,7,9,2,3,345,354,4,0.5,1000000]


/**
 * function name(parameter1, parameter2 ... parameterN)
 */
function putFoodOnPage (food, selector) {
    // const food = "value1"
    // const selector = ".foods"
    const titleTage = document.querySelector(selector)
    titleTage.textContent = food
}
const randomFoodName = randomize(foods)
/**
 * name(value1, value2 ... valueN)
 */
putFoodOnPage(randomFoodName, ".foods")
