// function reverseArray(n, arr) {
//     let reversedArr = [];
//     let buffIndex = 0;
//     let output = '';
//     for (let i = n-1; i >= 0; i--) {
//         reversedArr[buffIndex] = arr[i];
//         output += reversedArr[buffIndex] + ' ';
//         buffIndex ++;
//     }
//     console.log(output);
    
// }

function reverseArray2(n, arr) {
    let tempArr = [];
    for (let i = 0; i < n; i++) {
        tempArr.push(arr[i]);
    }
    let output = '';
    for (let j = tempArr.length-1; j >= 0; j--) {
        output += tempArr[j] + ' ';
    }
    console.log(output);
}
// reverseArray(3, [10, 20, 30, 40, 50]);
// reverseArray(4, [-1, 20, 99, 5]);
// reverseArray(2, [66, 43, 75, 89, 47]);

reverseArray2(3, [10, 20, 30, 40, 50]);
reverseArray2(4, [-1, 20, 99, 5]);
reverseArray2(2, [66, 43, 75, 89, 47]);