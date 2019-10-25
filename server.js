const WebSocket = require('ws');


const webSocketServer = new WebSocket.Server({ port: 8080 });

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('message', ("ehsdjge") => {
        console.log('Hi from server')

    });
});