const throwError = () => {
    throw new Error(`What! You blew it!`);
}

const successResponse = () => {
    return `Bingo! All working.`
}

try {
    throwError(); 
    console.log(successResponse()); // this is not logged!
} catch (error) {
    console.log(`The server responded with: ${error.message}`)
} finally {
    console.log(`This will log despite the error thrown.`)
}



// Here we're creating a function that throws an error. 
// This isn't good coding practise but we need a guaranteed error
// to simulate what would happen if a server did not respond successfully, 
// so that we can catch it.

// The successResponse will not be reached as once the error has been 
// generated, a try/catch block moves straight to the catch.

// If you don't have a try/catch block, and an error is thrown nothing 
// after the error would run in. 

// A try catch block is your opportunity to handle the error. And not be a 
// victim of the error! And make sure that the rest of your code can keep 
// running. 

// Finally block is for when you have code that you want to run, even if 
// an error has been thrown. E.g. removing a loading spinner. 