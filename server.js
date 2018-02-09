const http = require('http');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
  console.log("[" + Date.now() + "] Ping Received");
  response.sendStatus(200);
});

var cp = require('child_process');
cp.fork(__dirname + '/main.js');

app.listen(process.env.PORT);
setInterval(() => {
  console.log("Server Refreshing...");
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 180000);
