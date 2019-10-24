const connection = new WebSocket('172.31.30.174:8080');

connection.onopen = function() {
    console.log('connected');
};

connection.onclose = function() {
    console.log('disconnected');
};

connection.onerror = function(error) {
    console.error('failed to connect', error);
};

connection.onmessage = (event) => {
    console.log('received', event.data);
    let li = document.createElement('li');
    li.innerText = event.data;
    document.querySelector('#message').append(li);
};

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let portVal = document.querySelector('#portVal').value;
    connection.send(portVal);
    document.querySelector('#portVal').value = '';
});