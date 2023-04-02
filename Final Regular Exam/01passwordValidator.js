function passwordValidator(input) {
    let userPassword = input.shift().split('');

    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];
        let values = tokens.slice(1);
        debugger
        switch (command) {
            case 'Replace': {
                let char = values[0];
                let charValue = char.charCodeAt(0);
                let value = Number(values[1]);
                charValue += value;
                let newSymbol = String.fromCharCode(charValue);

                if (userPassword.includes(char)) {
                    for (let i = 0; i < userPassword.length; i++) {
                        if (userPassword[i] === char) {
                            userPassword[i] = newSymbol;
                        }

                    }
                    console.log(userPassword.join(''));
                }
                break;
            }
            case 'Insert': {
                let index = Number(values[0]);
                let char = values[1];
                if (index < 0 || index > userPassword.length - 1) {
                    break;
                }
                userPassword.splice(index, 0, char);
                console.log(userPassword.join(''));
                break;
            }
            case 'Make': {
                let manipulation = values[0];
                let index = Number(values[1]);
                switch (manipulation) {
                    case 'Upper': {
                        userPassword[index] = userPassword[index].toUpperCase();
                        console.log(userPassword.join(''));
                        break;
                    }
                    case 'Lower': {
                        userPassword[index] = userPassword[index].toLowerCase();
                        console.log(userPassword.join(''));
                        break;
                    }
                }
                break;
            }
            case 'Validation': {

                if (userPassword.length < 8) {
                    console.log(`Password must be at least 8 characters long!`);
                }

                let isValid = false;
                for (const char of userPassword) {
                    let charValue = char.charCodeAt(0);
                    if ((charValue >= 48 && charValue <= 57) || (charValue >= 65 && charValue <= 90) || (charValue >= 97 && charValue <= 122) || charValue === 95) {
                        isValid = true;
                    } else {
                        isValid = false;
                    }
                }
                if (!isValid) {
                    console.log(`Password must consist only of letters, digits and _!`);
                }

                let isUpper = false;
                for (const char of userPassword) {
                    let charValue = char.charCodeAt(0);
                    if (charValue >= 65 && charValue <= 90) {
                        isUpper = true;
                        break;
                    }
                }
                if (!isUpper) {
                    console.log(`Password must consist at least one uppercase letter!`);
                }

                let isLower = false;
                for (const char of userPassword) {
                    let charValue = char.charCodeAt(0);
                    if (charValue >= 97 && charValue <= 122) {
                        isLower = true;
                        break;
                    }
                }
                if (!isLower) {
                    console.log(`Password must consist at least one lowercase letter!`);
                }

                let isDigit = false;
                for (const char of userPassword) {
                    let charValue = char.charCodeAt(0);
                    if (charValue >= 48 && charValue <= 57) {
                        isDigit = true;
                        break;
                    }
                }
                if (!isDigit) {
                    console.log(`Password must consist at least one digit!`);
                }
                break;

            }
            case 'Complete': return;

        }
    }
}

// passwordValidator((['invalidpassword*',

//     'Add 2 p',

//     'Replace i -50',

//     'Replace * 10',

//     'Make Upper 2',

//     'Validation',
//     'Complete']))


passwordValidator((['123456789',

    'Insert 3 R',

    'Replace 5 15',

    'Validation',

    'Make Lower 3',

    'Complete']))