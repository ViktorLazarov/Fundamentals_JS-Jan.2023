function imitationGame(input) {
    let message = input.shift();
    for (const line of input) {
        let tokens = line.split('|');
        let command = tokens[0];
        let values = tokens.slice(1);
        switch (command) {
            case 'ChangeAll': {
                // message = message.split(values[0]).join(values[1]);
                let removeLetter = values[0];
                let insertLetter = values[1];
                while (message.includes(removeLetter)) {
                    message = message.replace(removeLetter, insertLetter)
                }
                break;
            }
            case 'Insert': {
                // message = message.split('');
                // message.splice(Number(values[0]),0,values[1]);
                // message = message.join('');
                let n = Number(values[0]);
                message = message.substring(0,n) + values[1] + message.substring(n);
                break;
            }
            case 'Move':{
                let moveCount = values[0];
                // message = message.split('');
                for (let i = 0; i < moveCount; i++) {
                    let firstLetter = message.substring(0,1);
                    let restLetters = message.substring(1);
                    message = restLetters + firstLetter;
                    // message.push(temp)                   
                }
                // message = message.join('');
                break;
            }
            case 'Decode': {
                console.log(`The decrypted message is: ${message}`);
                return;
            }
        }
    }
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])