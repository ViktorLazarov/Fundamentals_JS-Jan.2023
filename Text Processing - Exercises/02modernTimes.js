function modernTimes(input) {
    let words = input.split(' ');
    let validWord = false;
    for (const word of words) {
        
        if (word.startsWith('#') && word.length >1) {
            for (const char of word) {
                if (isNaN(char)) {
                    validWord = true;
                } else {
                    validWord = false;
                    break;
                }
            }
            if (validWord) {
                console.log(word.substring(1));
            }
        }
    }
  
}

modernTimes('#Nowadays everyone uses # to tag a #special word in #socialMedia')

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')