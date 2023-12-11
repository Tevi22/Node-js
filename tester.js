// Let us now understand how to import the calculator.js file into another file.

const myCalculator = require("./calculator"); // Use require() function and specify the module name to be imported.

// The require() function takes the path of the file as a parameter and returns an exports object. Now in order to use the methods of calculator.js add the below code in the tester.js file:

myCalculator.add(10, 30);
myCalculator.subtract(30, 10);