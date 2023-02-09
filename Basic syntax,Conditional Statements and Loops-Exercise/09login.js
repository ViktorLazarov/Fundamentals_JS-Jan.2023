function login(input) {
    let username = input[0];
    let password = '';
    for (let i = username.length-1 ; i >= 0 ; i--) {
        password += username[i];
    }
    let incorrectAttempts = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === password) {
            console.log(`User ${username} logged in.`);
        } else {
            console.log('Incorrect password. Try again.');
            incorrectAttempts ++;
            if (incorrectAttempts === 4) {
                console.log(`User ${username} blocked.`);
            }
        }
    }
}



login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);