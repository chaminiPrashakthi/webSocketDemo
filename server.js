const WebSocket = require('ws');


const webSocketServer = new WebSocket.Server({ port: 8080 });

webSocketServer.on('connection', (webSocket) => {
    webSocketServer.sendMessage("Welcome to the server!");
});