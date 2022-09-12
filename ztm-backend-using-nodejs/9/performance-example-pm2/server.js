const express = require('express');

const app = express();

/*

PM2 (Process Manager 2):-

PM2 is build upon cluster module. It gives additional capabilities on cluster like restart 
process when code changes, it can also deal if server fails it handle that also gracefully.
It can also monitor process and manage logs. It has many other feature read docs for more.
PM2 can handle cluster itself so need to write yourself cluster code to manage processes.

*/

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get('/', (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(4000);
  res.send(`Beep beep beep! ${process.pid}`);
});

console.log('Running server.js...');
console.log('Worker process started.');
app.listen(3000);

/*
PM2 Commands:-

* pm2 start server.js --> To start server
* pm2 status --> to check status or current running instances
* pm2 list or ls --> to check list of current running instances
* pm2 stop id or pm2 stop name --> to stop running instance of server
* pm2 start name --> to start or resume server instance from list
* pm2 delete name --> to delete or remove instance from list

* pm2 start server.js -i num_of_worker -> -i is used for instances which will be manage 
amount of worker process that will be created in our cluster. We can manage number of 
instances we create ex- 2 or max for maximum number of instances process to take complete
amount of thread our system has to offer. ex- pm2 start server.js -i max

* pm2 restart name --> to restart all instance of server of pm2 cluster
* pm2 logs --> to shows logs messages of our application also your all previous logs.
* pm2 logs --lines 200 --> to show last 200 lines of logs even you historical logs are preserved.

* pm2 start server.js -l logs.txt -i max --> by -l you can store your logs in defined file name.
here in command its logs.txt to save all logs in that file. If log file doesn't exist it will
create automatically and save all details in that file.

* pm2 show 0 --> by this you can pm2 show details of process id you mensioned and gives you
detail about that process. ex- path, pid, profiles, status, node version, git and git head,
last branch, code metrics values, uptime, logs, heap, event loop and many more details.

* pm2 monit --> It gives fancy live monitor of your pm2 server cluster processes in cli.

---- Zero Downtime Restart ----
If we make changes in our code to reflet changes we require typically to close server and restart
process which does put changes in our code but it also unavailable for x amount of time which
is bad thing.
Zero downtime reload or restart helps with that issue. It does is instead of terminating all
processes and restart them all at once. It has pm2 reload command to restart and reflect changes
one by one, keeping one process atleast running all times.

* command:- pm2 reload server

*/
