function condition(arr) {
    let resultArr = [arr[0]];
    let biggestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            resultArr.push(arr[i])
            biggestNum = arr[i]
        }

    }
    console.log(resultArr.join(' '));
}


condition([1, 3, 8, 4, 10, 12, 3, 2, 24])
condition([20, 3, 2, 15, 6, 1])
condition([1, 2, 3, 4])
