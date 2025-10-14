import colorPrint from "chalk";
import seasons from "./constants.js";

console.log(colorPrint.magenta(seasons.spring));
console.log(colorPrint.green(seasons.summer));
console.log(colorPrint.red(seasons.autumn));
console.log(colorPrint.blue(seasons.winter));
