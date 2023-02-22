function perfectNumber(number) {
    let divisors = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    let result = divisors.reduce((a,c)=> a + c, 0)
    if (result === number) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumber(28)