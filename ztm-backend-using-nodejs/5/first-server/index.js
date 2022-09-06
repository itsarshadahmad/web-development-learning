const http = require('http');
const PORT = 3000;

// Both req and res of http server are stream.
// req -> In request we can see what client has requested from server and send to server
// req is Readable stream which we can listen to data coming though stream by req.on()
// res -> In response we can send header and data back to client
// res is Writable Stream which use function to write streams ex- res.writeHead()
const server = http.createServer((req, res) => {
    // Creating different endpoints
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        // res.end is required to denote end of writable stream
        res.end("Your server started boy")
    } else if (req.url === "/friends") {
        // Sending JSON and header
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            id: 1,
            name: "Sir Isaac Newton"
        }))
    } else if (req.url === "/messages") {
        // Sending html through stream (res -> Writable stream) to client.
        // res.write() used to send streams.
        res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<body>")
        res.write("<h1>Isaac Newton</h1>")
        res.write("<p>What do you think about quantum computers</p>")
        res.write("</body>")
        res.write("</html>")
        // res.end() used to denote end of stream.
        res.end()
    } else {
        res.statusCode = 404
        res.end()
    }
})

// Started listening server on localhost:3000.
server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))