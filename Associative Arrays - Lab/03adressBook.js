function adressBook(input) {
    let adressBook = {};

    for (const elem of input) {
        let name = elem.split(':')[0];
        let adress = elem.split(':')[1];
        adressBook[name] = adress;
    }

    let sortedKeys = Object.keys(adressBook).sort((a, b) => a.localeCompare(b));

    for (const elem of sortedKeys) {
        console.log(`${elem} -> ${adressBook[elem]}`);
    }



}


// adressBook(['Tim:Doe Crossing',

//     'Bill:Nelson Place',

//     'Peter:Carlyle Ave',

//     'Bill:Ornery Rd'])

adressBook(['Bob:Huxley Rd',

    'John:Milwaukee Crossing',
    
    'Peter:Fordem Ave',

    'Bob:Redwing Ave',

    'George:Mesta Crossing',

    'Ted:Gateway Way',

    'Bill:Gateway Way',

    'John:Grover Rd',

    'Peter:Huxley Rd',

    'Jeff:Gateway Way',

    'Jeff:Huxley Rd'])