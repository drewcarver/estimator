const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: {
  origin: 'http://localhost:8080'
}});

io.on('connection', (socket: any) => {
  console.log('a user connected');
  socket.on('new session', (value: any) => {
    console.log(`Value is: ${value}`)
  })
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});