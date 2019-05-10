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