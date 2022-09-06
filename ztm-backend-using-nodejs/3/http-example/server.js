// HTTP REQUEST
const http = require("http")
// It can fetch data in http format only
const req = http.request("http://www.google.com", (res) => {
    // When data event occurs and our application retains data
    res.on("data", (dataChunk) => {
        console.log(`Data Chunk: ${dataChunk}`);
    })

    // When using http.request() it necessary to end request by call end event.
    res.on("end", () => {
        console.log("All data are fetched.");
    })
})
// Calling end event to end request
req.end()


// HTTPS REQUEST
const { request } = require("https")
// Works with https request
request("https://www.google.com", (resp) => {
    // Getting data
    resp.on("data", data => {
        console.log("DATA CHUNK:\n" + data);
    })
    // End event to end request 
    resp.on("end", () => {
        console.log("All data are fetched.");
    })
    // Calling end event
}).end()


// HTTPS GET REQUEST
const { get } = require("https")
// It is used for get only request, It also doesn't require to call end event to work.
get("https://www.google.com", (resp) => {
    resp.on("data", (data) => {
        console.log("Data Chunk:\n" + data);
    })
})