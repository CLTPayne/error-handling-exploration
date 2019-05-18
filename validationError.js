class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
}

const test = () => {
    throw new ValidationError('The user input is not correct');
}

try {
    test();
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}