function login(input) {
    let username = input[0];
    let password = '';
    for (let i = username.length-1 ; i >= 0 ; i--) {
        password += username[i];
    }
    let incorrectAttempts = 0;
    for (let i = 1; i <= 4; i++) {
        if (input[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            incorrectAttempts ++;
            if(incorrectAttempts < 4){
                console.log('Incorrect password. Try again.');
            }else {
                console.log(`User ${username} blocked!`);
            }
        }
        
    }
}



login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);