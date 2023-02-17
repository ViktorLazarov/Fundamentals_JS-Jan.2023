function houseParty(inputArr) {
    let name = '';
    let command = '';
    let guestList = [];
    for (const elem of inputArr) {
        name = elem.split(' is ')[0];
        command = elem.split(' is ')[1];
        if (command === 'going!' && !guestList.includes(name)) {
            guestList.push(name);
        } else if (command === 'going!' && guestList.includes(name)){
            console.log(`${name} is already in the list!`);
        }
        if (command === 'not going!' && !guestList.includes(name)) {
            console.log(`${name} is not in the list!`);
        } else if (command === 'not going!' && guestList.includes(name)){
            guestList.splice(guestList.indexOf(name),1);
        }

    }
    console.log(guestList.join('\n'));


}


houseParty(['Allie is going!', 

                        'George is going!',

                        'John is not going!',

                        'George is not going!']);
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);