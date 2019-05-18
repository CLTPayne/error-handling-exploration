const error = new Error('Whoopsie this was an error');

// An error is an object with 3 properties on the prototype
// Constructor, message and name
// Some browsers include additional properties on the error 
// E.g. fileName (the file the error occured in) and stack (stack trace of the error)


try {
    throw new Error('Whoooooooopsie, big mistake')
} catch (error) {
    console.log(`Error name: ${error.name}`);
    console.log(`Error message: ${error.message}`);
    console.log(`Error constructor: ${error.constructor}`);
}

try {
    const demo = {
        demoString: "demo time"
    }
    console.log(demo.demoString());
} catch (error) {
    console.log(error instanceof TypeError); // true 
    console.log(error.name); // TypeError
    console.log(error.message); // demo.demoString is not a function
}

// TypeError - variable or param is not the valid type. Eg. you can't execute a string.
// SyntaxError - your code doesn't match the expectations of the lanugage and is broken
// ReferenceError - you're trying to reference a variable you haven't declared yet

// This is what the Error class looks like in "pseudocode"
// class Error {
//     constructor(message) {
//         this.message = message;
//         this.name = "Error"; // (different names for different built-in error classes)
//         this.stack = <nested calls>; // non-standard, but most environments support it
//     }
// }