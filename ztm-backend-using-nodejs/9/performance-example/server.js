const express = require('express');

const app = express();

// When server request which require x (ex- 5s) amount of time. It blocks other request on
// server because javascript works on single thread and it can handle one task at time.
// So when two request occurs it blocks 2nd request and resolve first request.

// We can't put async-await on while loop. 
// Putting async-await on function call doesn't do anything.

// We can also use non-blocking calls like setTimeout() but we are simulating blocking condition.
// JSON.stringify() and JSON.parse() are blocking calls simulating these sorts of condition.

// As your site blocks user leaving your site became more invidable. It's recommended to keep
// your server response time under 100ms and keep it under 1s not more than that.

// delay act as blocking function which blocks server for defined amount of time.
function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

// Node can handle this issue by dividing request and spead load into multiple process by 
// spawning there replica machines which act as server to resolve that issue. ex- if we 3 
// request and each request takes 5s to complete then we can spawn multiple or 2 more servers 
// on different cores of cpu to handle this request entire code remains same just core act as 
// processes which handles all these request by spawn new processes to handle if one is busy. 
// This way loads divide into equal parts and process can response to multiple request got by 
// server.

app.get('/', (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Beep beep beep! ${process.pid}`);
});

console.log('Running server.js...');
console.log('Worker process started.');
app.listen(3000);