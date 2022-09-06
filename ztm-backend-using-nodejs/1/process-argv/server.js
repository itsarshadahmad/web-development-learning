// The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
const mission = process.argv[2]

if (mission === "learn") {
    console.log("Time to write some node code.");
} else {
    console.log(`Is ${mission} really more fun?`);
}

// OUTPUT: node server.js explore (optional)
// argv[0] => process.execPath (node)
// argv[1] => path to the JavaScript file being executed. (server.js)
// argv[...] => The remaining elements will be any additional command-line arguments. (explore)