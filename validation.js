document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let portVal = document.querySelector('#portVal').value;
    console.log(portVal)
    fetch('http://ec2-54-184-89-72.us-west-2.compute.amazonaws.com/:8080', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('Click was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
    document.querySelector('#portVal').value = '';
})