function bombNumbers(numbers, specialNumber) {
    let numbersArr = numbers;
    let bombNumber = specialNumber[0];
    let power = specialNumber[1];

    for (let i = 0; i < numbers.length; i++) {
        if (numbersArr[i] === bombNumber) {
            let start = Math.max(i-power, 0)
            let end = Math.min(i+power, numbersArr.length - 1)
            numbersArr.splice(start, (end - start) + 1)
        }
    }
    console.log(numbersArr.reduce((a,c) => a + c, 0));

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])
bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])