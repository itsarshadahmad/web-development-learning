const { Worker, isMainThread, workerData } = require("worker_threads")
// require('node:worker_threads')

// Worker Thread make node.js act as multi-threaded language.
// Checking weather in main thread or not
if (isMainThread) {
    // Here process id of worker thread and main thread remains same because they work on same
    // process unlikely cluster where worker works on different processes. 
    console.log(`Worker! Process ID: ${process.pid}`)
    // Creating new instance of Worker Thread by passing file directory to specify file.
    // Second parameter define work which we want to send to worker thread.
    // At time of execution of worker thread these both task will run parallel to each other
    // on same process.
    new Worker(__filename, {
        workerData: [7, 6, 2, 3]
    });
    new Worker(__filename, {
        workerData: [1, 3, 4, 3]
    });
} else {
    console.log(`Worker! Process ID: ${process.pid}`)
    // sort() in blocking call which blocks main thread here we are doing this on worker thread.
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}

/*

Worker Threads:-
It acts as multi-threading which is new V8 isolate which create new sandbox or isolated
instance of V8 engine, and runs independently of each other. Worker threads are instance
of V8 that can execute your JavaScript code in isolation side by side, with each isolates 
handling JS code for one thread.

Worker threads are just like cluster that help us to take advatage of multi-core processor
in our machine. Worker threads are similar to cluster module but they do things very 
differently. Cluster module uses processes while worker thread use V8 isolate (sandbox).

In cluster module we have one master process using that we can create multiple workers process
(or child process) using fork() which handle our request.

In worker thread we have main thread when our server runs. This thread can use Worker 
constructor to create new Worker thread by calling new on the new Worker(). And we
can create multiple Worker thread in this way.

cluster allow us to run multiple node instance in separate processes.
While worker thread allow us to run multiple instance of node in the same process.

In worker thread if we have 3 thread then 1 process can manage there request where 
in cluster for 3 cluster (worker) we require 3 processes.

Cluster doesn't share memory of each process it keep it separate from each other.
Worker Thread can share memory with each other and share in memory data with each other.

Worker threads doesn't include any built-in functionality to run server on one port and 
distribute incoming request between each thread, that is specific to cluster module.
To work with worker thread we need to manage ourself distribution of incoming request.
Worker threads are not yet stable so its better to stick with cluster module in production.

*/