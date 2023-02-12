function magicSum(arr, number) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (elem + arr[j] === number) {
                result.push(elem);
                result.push(arr[j]);
                console.log(result.join(' '));
                result = [];
            }

        }

    }


}


magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)