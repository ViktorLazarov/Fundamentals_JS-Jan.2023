function addAndSubstract(arr) {
    let sumOriginalArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOriginalArr += arr[i];
        
    }
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }

    let sumModifiedArr = 0;
    for (let j = 0; j < arr.length; j++) {
        sumModifiedArr += arr[j];   
    }
    console.log(arr);
    console.log(sumOriginalArr);
    console.log(sumModifiedArr);

}

addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])