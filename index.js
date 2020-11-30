const http = require('http');
const server = http.createServer((req, res) => {
    res.end('<h1>You are now connected to the server</h1>');
});

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    }
  });


io.on('connection', (socket, req) => {
    console.log('someone has connected to the socket')
    socket.emit('welcome',"Hello you are now connected to the web socket");
    socket.on('message', (msg) => {
        console.log(msg)
    });
});

server.listen(8000)
