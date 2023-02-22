function loadingBar(number) {
    let numberOfPercents = number / 10;
    let barArr = ['.','.','.','.','.','.','.','.','.','.']
    for (let i = 0; i < numberOfPercents; i++) {
        barArr.unshift('%')
        barArr.pop();
    }

    if (number < 100) {
        console.log(`${number}% [${barArr.join('')}]`);
        console.log(`Still loading...`);
    } else {
        console.log('100% Complete!');
        console.log(`${number}% [${barArr.join('')}]`);
    }
}

loadingBar(30)
loadingBar(50)
loadingBar(100)