// function reverseInPlace(arr) {
//     let output = '';
//     for (let i = arr.length-1; i >= 0; i--) {
//         output += arr[i] + ' ';
//     }
//     console.log(output);
// }
function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr.join(' '));
}



    reverseInPlace(['a', 'b', 'c', 'd', 'e'])
    reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
    reverseInPlace(['33', '123', '0', 'dd'])