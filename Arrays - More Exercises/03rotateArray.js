function rotateArray(arr) {
    let rotations = Number(arr[arr.length-1]);
    let tempArr = arr.splice(0,arr.length-1);
    for (let i = 0; i < rotations; i++) {
        let temp = tempArr.pop();
        tempArr.unshift(temp);
    }
    return tempArr.join(' ');
}


console.log(rotateArray(['1', '2', '3', '4', '2']));
console.log(rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15']));