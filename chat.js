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
    socket.on('messageToServer', (dataFromClient) => {
        console.log(dataFromClient);
    });

    socket.emit('messageFromServer', {data: 'This is a message from the server '});

    socket.on('message', (msg) => {
       io.emit('messageToClients', {text : msg});
    });
   
  });


