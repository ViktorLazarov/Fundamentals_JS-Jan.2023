function stringSubstring(searchWord, sensence) {
    let words = sensence.split(' ');
    for (const word of words) {
        if (searchWord === word.toLowerCase()) {
            console.log(searchWord);
            return;
        }
    }
    console.log(`${searchWord} not found!`);
    
}

stringSubstring('javascript', 'JavaScript is the bestprogramming language')
stringSubstring('python', 'JavaScript is the best programming language')