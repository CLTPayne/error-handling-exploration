const ValidationError = require('./validationError');

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(`No property: ${property}`);
        this.name = "Property Required Error";
        this.property = property;
    }
}

// Usage:
const readUser = (json) => {
    const user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }

    return user;
}

try {
    const user = readUser('{ "age": 21 }')
} catch (error) {
    if (error instanceof PropertyRequiredError) {
        console.log(`Invalid data: ${error.message}`);
        console.log(error.name);
        console.log(error.property);
    } else if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else {
        throw error;
    }
}