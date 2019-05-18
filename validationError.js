class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
}

// Dummy function to generate an error
const test = () => {
    throw new ValidationError("The user input is not correct");
}

try {
    test();
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}

// We set the message property on the parent error via super()
// We over ride the parent constructors name of 'Error' with 'Validation Error'

// Usage for this custom error:

const readUser = (json) => {
    const user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("No age field");
    }
    if (!user.name) {
        throw new ValidationError("No name field");
    }

    return user;
}

// Example of this in practise
// Generate a validation error with missing name property:

try {
    const user = readUser('{"name": 28 }');
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else {
        throw error // if it's an unknown error, throw it
    }
}

// Generate a syntax error with unexpected number in JSON position 1:

try {
    const user = readUser('{1: 28 }');
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else {
        throw error // if it's an unknown error, throw it
    }
}