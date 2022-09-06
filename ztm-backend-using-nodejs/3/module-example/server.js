// Requiring modules or importing modules
// Object way of importing
// const request = require("./request")
// const response = require("./response")

// Destructring way to import
// If function or variable name exist in exported data then you can directly use it here.
const { send } = require("./request")
const { read } = require("./response")

// MODULE CACHING
// When module imported module is available as cache. 
// So, if you import it again it goes and fetch your import from cache module.
// This cache is global and it cached under require.cache
// It shows all module details and weather it is cached or not.
console.log(require.cache);

function makeRequest(url, data) {
    send(url, data)
    return read()
}

const responseData = makeRequest("https://www.google.com", "Hello")
console.log(responseData);