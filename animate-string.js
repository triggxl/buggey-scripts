const chalk = require("chalk-animation");

//list valid methods
const validMethods = [ 'glitch', 'karaoke', 'neon', 'pulse', 'radar', 'rainbow' ];
//grab third position in args array
const scriptArg = process.argv[2]
//check the arg is valid and use it or default to rainbow
const method = validMethods.includes(scriptArg) ? sriptArg : 'rainbow';
const animateString = (string) => {
  let animation = chalk[method](string);
  setTimeout(() => animation.stop(), 1300);
} 

module.exports = { animateString };
// export animateString;//named
//--> module.exports = { animateString: animateString }; // named export
