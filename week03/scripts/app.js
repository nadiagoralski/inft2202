// imports always go at top of JS file
import { halfOf, multiply } from "./lib.js";
// import { doSomething } from "./doSomething.js"
import { flag, touch } from "./validator.js";


// use halfOf function from lib.js to print half of 50
console.log(halfOf(50));
// use multiply from lib.js to multiply 2 numbers 
console.log(multiply(1,2));

// validator.js flag and touch 
console.log(flag);
touch();
console.log(flag);
