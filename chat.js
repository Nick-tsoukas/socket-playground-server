const express = require('express');
const app = express();

const expressServer = app.listen(9000, () => {
    console.log("you are now connected to the server");
});

const io = require("socket.io")(expressServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    }
  });

  io.on('connection', (socket) => {
    console.log('you are now connected to the Web Socket from server');

    socket.on('message', (data) => {
      console.log('message from server back to client ', data)
      io.emit('message', data);
    });
   
  });


