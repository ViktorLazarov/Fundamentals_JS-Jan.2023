function addAndSubtract(num1, num2, num3) {
    let sumResult = sum(num1, num2);
    let subtractResult = subtract(sumResult, num3);

    console.log((subtractResult));

    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
}



addAndSubtract(23, 6, 10)