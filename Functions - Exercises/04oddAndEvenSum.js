function oddAndEvenSum(number) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < String(number).length; i++) {
        if (Number(String(number)[i]) % 2 === 0) {
            sumEven += Number(String(number)[i]);
        } else {
            sumOdd += Number(String(number)[i]);
        }
    
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}


oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)