const express = require('express');
const cluster = require("cluster")
const os = require("os")

const app = express();

/* 

Issue of dealing with blocking call can be deal in multiple way in this module, it is using
cluster built-in module.

Cluster module allows you to create copies of your node process that each run your server
code side-by-side in parallel. When we start our node server then the main node process is
created. Node calls this the master process. Inside the cluster module we access to function
called fork. Any time we call fork in our server.js file, node takes this master process and
creates copy of it that calls the worker process. We can create multiple worker process by
calling fork(). Each worker is require code to response any request in our server. While
Master process is only responsible for coordinating the creation of these worker process 
using the fork().

It is worker which reponds to request and share request by using round robin approach, by 
distributing request between each other workers. (In windows node let windows OS (windows 
process manager) to manage this work to distribute task between each other.)

[ node server.js --> MASTER Process ---- fork() --> Worker Process ]

*/

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

/*

* In verticle scaling we try to make node application itself to respond as fast as can. Improving
one server to response request as fast it can be done.

* Cluster is example of horizontal scaling where we are spawn or create new process to handle 
server request. In horizontal scaling multiple computers can be used to improve performance. 
It can also be said as load-balancing server.

*/

app.get('/', (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(4000);
  res.send(`Beep beep beep! ${process.pid}`);
});

console.log('Running server.js...');

/* 
node listen server when worker starts and node cluster understands to run workers on same 
port as server. Node understands to divide incoming process to workers while getting request 
on same port 3000.
*/
// if master process then returns true else false and runs worker process
if (cluster.isMaster) {

  console.log("Master process started.");
  // Create number of workers that is number of cpu cores thread in our machine.
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork()
  }
} else {

  console.log('Worker process started.');
  app.listen(3000);
}

// to test it in chrome we need to disable cache to run multiple tabs
// request as different request.

// PROBLEM: Issue with this approach is that if you get multiple request more request then
// worker then again same issue arises. It became just temporary solution after a
// extent time of period. ex- if 2 workers have to handle 4 request then issue arises.
// We are also limited to create no more worker process than CPU logical cores
// (Thread) in our system. ex- my laptop has 12 thread so we can create 12 workers.