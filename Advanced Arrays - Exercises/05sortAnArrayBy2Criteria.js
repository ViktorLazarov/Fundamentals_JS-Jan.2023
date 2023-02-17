function sortBy2Criteria(arr) {
    arr.sort((a,b) => {
        if (a.length - b.length === 0) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        }
        return a.length - b.length;

    })

    console.log(arr.join('\n'));

}

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortBy2Criteria(['alpha','beta','gamma'])
sortBy2Criteria(['test','Deny','omen','Default'])