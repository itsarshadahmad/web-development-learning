const {send, read} = require("./internals")
// When we require any directory node looks for index.js file in directory by default to
// import that because in node.js we can require directory without index.js file.
// It is helpful when directory works with multiple modules to bind and export to users as one this get useful.

function makeRequest(url, data) {
    send(url, data)
    return read()
}

const responseData = makeRequest("https://www.google.com", "Hello")
console.log(responseData);