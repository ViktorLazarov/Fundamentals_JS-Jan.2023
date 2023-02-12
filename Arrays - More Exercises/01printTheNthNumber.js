function printNthNumber(arr) {
    let resultArr = [];
    let step = Number(arr[arr.length-1]);

    for (let i = 0; i < arr.length-1; i += step) {
        resultArr.push(arr[i]);
        
    }
    return resultArr.join(' ');
}

console.log(printNthNumber(['5', '20', '31', '4', '20', '2']));