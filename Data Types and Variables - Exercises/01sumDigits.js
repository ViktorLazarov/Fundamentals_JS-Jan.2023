function sumDigits(input) {
    let sum = 0;
    let inputStr = String(input);
    for (let i = 0; i < inputStr.length; i++) {
        sum += Number(inputStr[i]);
        
    }
    console.log(sum);
}


sumDigits(245678);
sumDigits(97561);