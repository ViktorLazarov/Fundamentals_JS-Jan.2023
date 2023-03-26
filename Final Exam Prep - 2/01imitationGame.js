function imitationGame(input) {
    let message = input.shift();
    for (const line of input) {
        let tokens = line.split('|');
        let command = tokens[0];
        let values = tokens.slice(1);
        switch (command) {
            case 'ChangeAll': {
                message = message.split(values[0]).join(values[1]);
                break;
            }
            case 'Insert': {
                message = message.split('');
                message.splice(Number(values[0]),0,values[1]);
                message = message.join('');
                break;
            }
            case 'Move':{
                let moveCount = values[0];
                message = message.split('');
                for (let i = 0; i < moveCount; i++) {
                    let temp = message.shift();
                    message.push(temp)                   
                }
                message = message.join('');
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