function factorial(numA, numB) {
    let factA = calcFactorial(numA);
    let factB = calcFactorial(numB);

    return (factA/factB).toFixed(2);


    function calcFactorial(num) {
        let res = 1;
        for (let i = num; i > 1; i -= 2) {
            res *= i * (i - 1);
        }
        return res;
    }
}


console.log(factorial(5, 2));