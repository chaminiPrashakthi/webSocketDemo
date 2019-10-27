document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let portVal = document.querySelector('#portVal').value;
    console.log(portVal)

})