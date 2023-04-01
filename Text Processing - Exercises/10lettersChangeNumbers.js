function lettersChangeNumbers(input) {
    let words = input.split(' ');
    let position = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8,
        'i' : 9,
        'j' : 10,
        'k' : 11,
        'l' : 12,
        'm' : 13,
        'n' : 14,
        'o' : 15,
        'p' : 16,
        'q' : 17,
        'r' : 18,
        's' : 19,
        't' : 20,
        'u' : 21,
        'v' : 22,
        'w' : 23,
        'x' : 24,
        'y' : 25,
        'z' : 26,
    }
    let result = 0;
    for (const word of words) {
        if (word) {
            
            let firstLetter = word[0];
            let number = Number(word.substring(1,word.length-1))
            let secondLetter = word[word.length-1];
            let charCodeFirst = firstLetter.charCodeAt(0)
            let charCodeSecond = secondLetter.charCodeAt(0)
            
            if (charCodeFirst >= 65 && charCodeFirst <= 90 ) {
                number /= position[firstLetter.toLowerCase()];
            } else {
                number *= position[firstLetter.toLowerCase()];
            }
            

            if (charCodeSecond >= 65 && charCodeSecond <= 90 ) {
                number -= position[secondLetter.toLowerCase()];
            } else {
                number += position[secondLetter.toLowerCase()];
            }
            result += number;
        }
    }
    console.log(result.toFixed(2));
}

lettersChangeNumbers('A12b  s17G');
lettersChangeNumbers('P34562Z q2576f H456z');
lettersChangeNumbers('a1A')