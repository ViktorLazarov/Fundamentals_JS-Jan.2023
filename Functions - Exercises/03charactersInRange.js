function charactersInRange(charA, charB) {
    let numA = charA.charCodeAt(0);
    let numB = charB.charCodeAt(0);

    let startIndex = smallesOfTwoNumbers(numA, numB); 
    let endIndex = biggestOfTwoNumbers(numA, numB); 
    let result = '';
    for (let i = startIndex + 1; i < endIndex; i++) {
        result += (String.fromCharCode(i)) + ' ';
        
    }

    function smallesOfTwoNumbers(a, b) {
        return Math.min(a,b);
    }
    
    function biggestOfTwoNumbers(a, b) {
        return Math.max(a,b);
    }
    
    console.log(result);
}



charactersInRange('a','d')
charactersInRange('#',':')