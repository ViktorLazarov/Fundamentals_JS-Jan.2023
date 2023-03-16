function searchForANumber(numbers, commands) {
    let numbersArr = numbers;
    let takeNumbers = commands[0];
    let deleteNumbers = commands[1];
    let searchNumber = commands[2];

    let takenNumbers = numbersArr.splice(0, takeNumbers);
    takenNumbers.splice(0,deleteNumbers);
    let count = 0;
    for (const number of takenNumbers) {
        if (number === searchNumber) {
            count++;
        }
    }

    console.log(`Number ${searchNumber} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5])