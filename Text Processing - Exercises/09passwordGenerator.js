function passwordGenerator(input) {
    let str = (input[0] + input[1]).split('');
    let word = input[2];
    let index = 0;

    for (let j = 0; j < str.length; j++) {
        debugger
        if (str[j] === 'a' || str[j] === 'e' || str[j] === 'o' || str[j] === 'u' || str[j] === 'i') {
            if (index >= word.length) {
                index = 0;
            }
            if (index < word.length) {
                str[j] = word[index].toUpperCase();
                index++;
            }
        }

    }
    console.log(`Your generated password is ${str.reverse().join('')}`);

}

passwordGenerator([

    'ilovepizza', 'ihatevegetables',

    'orange'

])
passwordGenerator([

    'easymoneyeazylife',

    'atleasttencharacters',

    'absolute'

])