function solve(arr) {
    let resultArr = [];
    let isBigger = true;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (current > arr[j]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            resultArr.push(arr[i]);
        }
    }
    if (arr[arr.length-2] <= arr[arr.length-1]) {
        resultArr.push(arr[arr.length-1]);
    }
    console.log(resultArr.join(' '));

}

solve([14, 24, 3, 19, 15, 17])
solve([1, 4, 3, 2])
solve([41, 41, 34, 20])
solve([27, 19, 42, 2, 13, 45, 48])
     
