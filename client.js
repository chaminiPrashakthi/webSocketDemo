var WebSocket = require('ws');
const exec = require('child_process').exec;
var message = null;
//web socket connection
const connection = new WebSocket('ws://ec2-34-217-33-214.us-west-2.compute.amazonaws.com:8080');

connection.onopen = () => {
    console.log('connected');
}

connection.onclose = () => {
    console.error('disconnected');
}

connection.onmessage = e => {
    console.log(e.data + 'Port No');
    portForwarding(e.data);
}

connection.onerror = (error) => {
    console.error('failed to connect', error);
}

//ssh tunneling

portForwarding = function(portVal) {
    var
        config = {
            host: '34.217.33.214',
            username: 'demo',
            password: '1234'
        },
        portForwardingCmd = 'ssh -R ' + portVal + ':localhost:22 demo@' + config.host;
    console.log(portForwardingCmd)

    exec(portForwardingCmd, (error, stdout, stderr) => {

        if (error) {
            message = 'Error';
            console.log(message)
            connection.send(message);
            throw error;
        }
    });
    connection.send(message);

}