function revealWord(input1, input2) {
    let inputWords = input1.split(', ');
    let sentenceWords = input2.split(' ');
    
    for (let i = 0; i < inputWords.length; i++) {
        for (let j = 0; j < sentenceWords.length; j++) {
            let inputWord = inputWords[i];
            let replacedWord = sentenceWords[j];
            
            if (inputWord.length === replacedWord.length && replacedWord.includes('*')) {
                sentenceWords[j] = inputWord;
            }
        }
    }
    console.log(sentenceWords.join(' '));
    
}

revealWord('great, learning', 'softuni is ***** place for ******** new programming languages')