import { send } from "./request.mjs"
import { read } from "./response.mjs"

function makeRequest(url, data) {
    send(url, data)
    return read()
}

const responseData = makeRequest("https://www.google.com", "Hello")
console.log(responseData);

// To make ES6 import works on node.js. We need to either change file extension to .mjs
// or add in package.json type:module in order to work. By default its type is set to .cjs