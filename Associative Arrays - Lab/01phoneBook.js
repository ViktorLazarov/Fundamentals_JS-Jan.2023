function phoneBook(input) {
    let phoneBook = {};

    for (const elem of input) {
        let name = elem.split(' ')[0];
        let phoneNumber = elem.split(' ')[1];

        phoneBook[name] = phoneNumber;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}


phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])