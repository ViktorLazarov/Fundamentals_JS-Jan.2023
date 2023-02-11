function condenseArray(arr) {
    
    while (arr.length > 1){
        let tempArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length-1) {
                break;
            }
            tempArr[i] = arr[i] + arr[i + 1];
        }
        arr = tempArr;
    }

    
    console.log(arr.join(''));
}

condenseArray([5,0,4,1,2])
condenseArray([2,10,3])
condenseArray([1])

