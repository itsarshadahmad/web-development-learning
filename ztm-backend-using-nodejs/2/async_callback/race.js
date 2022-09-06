// setTimeout makes its callback asynchronous and add delay of specified amount.
// Callback is function which executes when task completes in this case it sleeps 1sec completes.
setTimeout(() => console.log("🐇 Finishes!"), 1000)
console.log("🐢 Finishes!");