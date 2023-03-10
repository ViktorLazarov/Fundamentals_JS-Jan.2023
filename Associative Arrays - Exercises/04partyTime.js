function partyTime(data) {
    let partyList = new Set();
    let command = data.shift();

    while (command !== 'PARTY') {
        partyList.add(command)
        command = data.shift()
    }
    
    for (const guest of data) {
        if (partyList.has(guest)) {
            partyList.delete(guest);
        }
    }
    
    let sorted = Array.from(partyList).sort();
    console.log(sorted.length);
    for (const guest of sorted) {
        console.log(guest);
    }

}

partyTime(['7IK9Yo0h',
           '9NoBUajQ',
           'Ce8vwPmE',
           'SVQXQCbc',
           'tSzE5t0p',
           'PARTY',
           '9NoBUajQ',
           'Ce8vwPmE',
           'SVQXQCbc'])

console.log('******************');
partyTime(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])