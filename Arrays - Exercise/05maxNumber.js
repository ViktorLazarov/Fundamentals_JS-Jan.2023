function maxNumber(arr) {
    let tempArr = [];
    let biggerNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggerNumber) {
            biggerNumber = arr[i];
        }

    }

    console.log(biggerNumber);
}

maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);