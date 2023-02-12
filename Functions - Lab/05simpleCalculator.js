function calculator(a, b, operation) {
    let result = 0;
    switch (operation) {
        case 'multiply':result = a * b; break;
        case 'divide':result = a / b; break;
        case 'add':result = a + b; break;
        case 'subtract':result = a - b; break;
    }
    return result;
}

console.log(calculator(5,5,'multiply'));
console.log(calculator(40,8,'divide'));