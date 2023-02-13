function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numAsString = String(arr[i]);
        let buff = '';
        for (let j = numAsString.length - 1 ; j >= 0; j--) {
            buff += numAsString[j];
            
        }
        console.log(buff === numAsString);
    }
}



palindromeIntegers([123,323,421,121]);