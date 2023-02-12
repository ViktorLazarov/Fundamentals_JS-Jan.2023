function addOrRemove(arr) {
    let resultArr = [];

    for (let i = 1; i <= arr.length; i++) {
        let command = arr[i - 1]
        if (command === 'add') {
            resultArr.push(i)
        } else {
            resultArr.pop();
        }

    }
    if (resultArr.length === 0) {
        return 'Empty';
    }
    return resultArr.join(' ');
}

console.log(addOrRemove(['add', 'add', 'add', 'add']))
console.log(addOrRemove(['add', 'add', 'remove', 'add', 'add']))
console.log(addOrRemove(['remove', 'remove', 'remove']))