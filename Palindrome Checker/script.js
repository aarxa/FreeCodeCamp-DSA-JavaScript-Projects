document.getElementById('check-btn').addEventListener('click', function () {
    const userInput = document.getElementById('text-input').value.trim().toLowerCase();

    if (userInput === '') {
        showAlert('Please input a value');
        return;
    }

    const strippedInput = userInput.replace(/[^a-zA-Z0-9]/g, '');
    const reversedInput = strippedInput.split('').reverse().join('');

    const resultElement = document.getElementById('result');
    if (strippedInput === reversedInput) {
        resultElement.textContent = `"${userInput}" is a palindrome`;
        resultElement.style.color = '#0f0';
    } else {
        resultElement.textContent = `"${userInput}" is not a palindrome`;
        resultElement.style.color = '#f00';
    }

    resultElement.style.opacity = 1;
    setTimeout(() => {
        resultElement.style.opacity = 0;
    }, 3000);
});

function showAlert(message) {
    const alertBox = document.getElementById('alert');
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

