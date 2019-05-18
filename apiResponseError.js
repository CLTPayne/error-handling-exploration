class APIResponseError extends Error {
    constructor(status, url = 'unknown', ...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, APIResponseError);
        }

        this.name = 'API Response Error';
        this.status = status;
        this.url = url;
    }
}

try {
    throw new APIResponseError(
        500, 
        'https://randomfakeapi.com/endpoint',
        'Server Error: Could not connect'
    );
} catch (error) {
    console.log(error.name); // API Response Error
    console.log(error.status); // 500
    console.log(error.url); // 'https://randomfakeapi.com/endpoint'
    console.log(error.message); // Server Error: Could not connect
}

// Extend the Error class to make a custom error with any properties 
// E.g. a url and response status could be really helpful for api calls 
// And these do not exist on default JavaScript error types
// The name property would be a generic 'Error' but this is overridden 
// Hence the more useful 'API Response Error'.
// The stacktrace is on top class errors that use the V8 engine 
// This is in Chrome and node, soon Edge too. So check and don't assume.