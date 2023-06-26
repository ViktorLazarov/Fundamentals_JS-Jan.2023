function distinctArray(inputArr) {
    let result = [];
    for (const elem of inputArr) {
        if (!result.includes(elem)) {
            result.push(elem);
        }
    }
    return result.join(' ');
}


console.log(distinctArray([1, 2, 3, 4]));
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));
