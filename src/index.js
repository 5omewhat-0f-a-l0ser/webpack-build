import "./pages/index.css";
import stepsSrc from "../images/steps.png";

const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;

console.log("Hello, World!");

const numbers = [2, 3, 5];

// Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map(number => number * 2); 

console.log(doubledNumbers); // 4, 6, 10