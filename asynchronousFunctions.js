const fetch = require("node-fetch");

async function fetchGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const body = await response.json();
    return body;
}

fetchGitHubUser("CLTPayne")
    .then(user => {
        console.log(user.name);
        console.log(user.location);
    })