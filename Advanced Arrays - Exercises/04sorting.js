function sorting(inputArr) {
    let result = [];
    let iterations = inputArr.length;
    inputArr.sort((a,b) => a - b);
    
    // for (let i = 0; i < iterations; i++) {
    //     if (i % 2 === 0) {
    //         inputArr.sort((a, b)=> b - a)
    //         result.push(inputArr.shift());
    //         inputArr.sort((a, b)=> a - b)
    //     } else {
    //         // inputArr.sort((a, b)=> a - b)
    //         result.push(inputArr.shift());
    //         // inputArr.sort((a, b)=> a - b)
    //     }
        
    // }
    // for (let i = 0; i < iterations; i++) {
    //     if (i % 2 === 0) {
    //         result.push(inputArr.pop());
    //     } else {
    //         result.push(inputArr.shift());
    //     }
    // }
    
    while (inputArr.length != 0) {
        result.push(inputArr.pop());
        result.push(inputArr.shift());
    }
    console.log(result.join(' '));

}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32,7, 19, 47]);