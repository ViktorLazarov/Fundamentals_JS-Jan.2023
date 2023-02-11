function printCommonElements(arr1, arr2) {
    let resultsArr = [];
    for (const iterator of arr1) {
        for (const iterator2 of arr2) {
            if (iterator === iterator2) {
                resultsArr.push(iterator)
            }
        }
    }
    for (const iterator of resultsArr) {
        console.log(iterator);
    }
}

printCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
printCommonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])
printCommonElements(['s', 'o', 'c', 'i', 'a', 'l'], ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '])