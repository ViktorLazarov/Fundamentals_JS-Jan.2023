function replaceRepeatingChars(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let nextChar = input[i+1]
        debugger
        if (!(char === nextChar)) {
            result += char;
        }
    }
    console.log(result);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')