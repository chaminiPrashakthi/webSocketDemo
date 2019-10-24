var webSocket = require('ws')
exec = require('child_process').exec;

var publicIp = '54.184.89.72';
var port = 8080;
var keyPath = '~/Downloads/aws_instance.pem'

websocketCommand = 'ssh -o \"StrictHostKeyChecking no\" -fN -L ' + port + ':localhost:' + port + ' ubuntu@' + publicIp + ' -i ' + keyPath,

    console.log(websocketCommand)
exec(websocketCommand,
    function(error, stdout, stderr) {
        console.log('Web Socket Connection success');
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }
);