function storage(input) {
    let storage = new Map();

    for (const elem of input) {
        let item = elem.split(' ')[0];
        let quantity = Number(elem.split(' ')[1]);
        if (!storage.has(item)) {
            storage.set(item, quantity);
        } else {
            let currentQuant = storage.get(item);
            storage.set(item, currentQuant + quantity);
        }
    }
    for (const [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}

storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])