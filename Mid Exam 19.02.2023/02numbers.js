function numbers(inputArr) {
    let numbersArr = inputArr.shift().split(' ').map(x => Number(x));
    let operations = inputArr.shift().split(' ');
    let command = operations[0];
    let value = Number(operations[1]);
    let replacement = Number(operations[2]);

    while (command !== 'Finish') {
        switch (command) {
            case 'Add': add(numbersArr, value); break;
            case 'Remove': remove(numbersArr, value); break;
            case 'Replace': replace(numbersArr,value, replacement); break;
            case 'Collapse': numbersArr = collapse(numbersArr,value); break;
        }
        operations = inputArr.shift().split(' ');
        command = operations[0];
        value = Number(operations[1]);
        replacement = Number(operations[2]);
    }
    console.log(numbersArr.join(' '));




    function add(numbersarr, value) {
        numbersarr.push(value);
    }

    function remove(numbersarr, value) {
        if (numbersarr.includes(value)) {
            numbersarr.splice(numbersarr.indexOf(value), 1)
        }
    }

    function replace(numbersarr, value, replacement) {
        if (numbersarr.includes(value)) {
            numbersarr.splice(numbersarr.indexOf(value), 1, replacement)
        }
    }

    function collapse(numbersarr,value) {
        return numbersarr.filter(x => x > value);
    }




}


// numbers(["1 4 5 19",
//     "Add 1",
//     "Remove 4",
//     "Finish"])
// console.log('****************');
// numbers(["5 9 70 -56 9 9",
//     "Replace 9 10",
//     "Remove 9",
//     "Finish"])
// console.log('***************');
// numbers(["1 20 -1 10",
//          "Collapse 8",
//          "Finish"])
console.log('****************');
numbers(["5 9 70 -56 9 9",
    "Collapse 8",
    "Add 1",
    "Replace 9 10",
    "Remove 9",
    "Finish"])