// Working with the file system
// const fs = require("fs");
// const contents = fs.readdirSync("./animals");
// console.log(contents);
//Requiring custom modules
// const fs = require("fs");
// const chalk = require("chalk-animation");
// const contents = fs.readdirSync("./animals");
// const animation = chalk.rainbow(contents.join("\n"));
//Add Debugger
// debugger;
// animation.stop(); //stops immediately
//add timer
// setTimeout(()=> animation.stop(), 1300);
//access using named import
const fs = require('fs');
const { animateString } = require("./animate-string");
const contents = fs.readdirSync('./animals');
animateString(contents.join('\n'));