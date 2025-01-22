function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

function calculateFactorial() {
    const number = document.getElementById('number').value;
    const iterativeResultDiv = document.getElementById('iterative-result');
    const recursiveResultDiv = document.getElementById('recursive-result');

    if (number === '' || number < 0) {
        iterativeResultDiv.textContent = 'Please enter a valid positive number.';
        iterativeResultDiv.classList.add('error');
        recursiveResultDiv.textContent = '';
        return;
    }

    const num = parseInt(number);
    const iterativeResult = factorialIterative(num);
    const recursiveResult = factorialRecursive(num);

    iterativeResultDiv.textContent = `Iterative Factorial: ${iterativeResult}`;
    recursiveResultDiv.textContent = `Recursive Factorial: ${recursiveResult}`;

    iterativeResultDiv.style.opacity = "1"; 
    recursiveResultDiv.style.opacity = "1";
}