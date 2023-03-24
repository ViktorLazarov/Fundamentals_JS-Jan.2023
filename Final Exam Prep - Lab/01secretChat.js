function secretChat(input) {
    let message = input.shift();
    for (const line of input) {
        let tokens = line.split(':|:');
        let command = tokens[0];
        let values = tokens.slice(1);
        
        switch (command) {
            case 'ChangeAll': {
                // message = message.split(values[0]).join(values[1]);
                while (message.includes(values[0])) {
                    message = message.replace(values[0], values[1]);
                }
                console.log(message);
                break;
            }
            case 'Reverse': {
                let substring = values[0];
                if (message.includes(substring)) {
                    message = message.replace(substring, '');
                    substring = reverseStr(substring);
                    message = message + substring;
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            }
            case 'InsertSpace':{
                let firstPart = message.slice(0,values[0])
                let secondPart = message.slice(values[0]);
    
                message = firstPart + ' ' + secondPart;
                console.log(message);
                break;
            }
            case 'Reveal': console.log(`You have a new text message: ${message}`); break;
        }
    }

    function reverseStr(str) {
        let reversedStr = str.split('').reverse().join('');
        return reversedStr;
    }

}

secretChat([

    'heVVodar!gniV',

    'ChangeAll:|:V:|:l',

    'Reverse:|:!gnil',

    'InsertSpace:|:5',

    'Reveal'

])