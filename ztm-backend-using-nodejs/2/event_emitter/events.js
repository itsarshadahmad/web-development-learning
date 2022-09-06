const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Listening to win race event
// Subscribe to celebrity for Observer 1
celebrity.on("win race", () => {
    console.log("Congratulations! You are the best!");
});

// Event with response or with value
// Subscribe to celebrity for Observer 2
celebrity.on("race", (result) => {
    if (result === "lost") {
        console.log("I knew you are looser!");
    } else {
        console.log("Boo! I could have done better!");
    }
});

// Event listen when program ends its execution
process.on("exit", (code) => {
    console.log("Process exit event with code: " + code);
})

// Trigger event or create event or emit event
celebrity.emit("win race")
// Event with value or result
celebrity.emit("race", "lost")