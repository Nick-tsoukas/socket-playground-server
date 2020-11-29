const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end('<h1>You are now connected to the server</h1>');
});

const wss = new websocket.Server({server});

wss.on('headers', (headers, req) => {
    console.log(headers)
});

wss.on('connection', (ws, req) => {
    ws.send("you are connected to the websocket now ");
    ws.on('message', (msg) => {
        console.log(msg);
    })
});



server.listen(8000);