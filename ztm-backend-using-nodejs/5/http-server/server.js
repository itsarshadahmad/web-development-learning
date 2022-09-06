const http = require('http');
const PORT = 3000;
// Creates server
const server = http.createServer();
const friends = [
    {
        id: 1,
        name: 'Nikola Tesla',
    },
    {
        id: 2,
        name: 'Sir Isaac Newton',
    },
    {
        id: 3,
        name: 'Albert Einstein',
    }
];

// Listening for request to server.
server.on('request', (req, res) => {
    // Spliting URL endpoint parameter
    const items = req.url.split('/');
    // /friends/2 => ['', 'friends', '2']
    // /friends/
    // To handle different http methods we use req.method to check method
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            // Converting to string buffer object (data.toString())
            const friend = data.toString();
            console.log('Request: ', friend);
            friends.push(JSON.parse(friend));
        });
        // To mirror request and response type, echo result in same type we got requested.
        // JSON (req - Readable Stream) --> PIPE --> JSON (res - Writable Stream)
        // It used when we recieve data from client and require to send back result
        // After data request processed then we pipe. Pipe also end request so no need req.end()
        req.pipe(res);
    } else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // Filter user by id if exist
        if (items.length === 3) {
            // if id -> return user from list
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            // else return all users from list
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost