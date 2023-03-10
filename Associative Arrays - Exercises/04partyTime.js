function partyTime(data) {
    let partyList = [];
    let command = data.shift();

    while (command !== 'PARTY') {
        partyList.push(command);
        command = data.shift()
    }
   
    for (const guest of data) {
        if (partyList.includes(guest)) {
            partyList.splice(partyList.indexOf(guest),1);
        }
    }
    
    let sorted = partyList.sort();
    console.log(sorted.length);
    for (const guest of sorted) {
        console.log(guest);
    }

}



partyTime(['7IK9Yo0h',
           'Ce8vwPmE',
           '9NoBUajQ',
           'SVQXQCbc',
           'tSzE5t0p',
           'tSzE5t0p',
           'tSzE5t0p',
           'PARTY',
           '9NoBUajQ',
           'Ce8vwPmE',
           'SVQXQCbc',
           'tSzE5t0p'])

console.log('******************');
partyTime([ 'm8rfQBvl',
            'fc1oZCE0',
            'UgffRkOn',
            '7ugX7bm0',
            '9CQBGUeJ',
            '9CQBGUeJ',
            '2FQZT3uC',
            'dziNz78I',
            'mdSGyQCJ',
            'LjcVpmDL',
            'LjcVpmDL',
            'fPXNHpm1',
            'HTTbwRmM',
            'B5yTkMQi',
            '8N0FThqG',
            '8N0FThqG',
            'xys2FYzn',
            'MDzcM9ZK',
            'PARTY',
            '2FQZT3uC',
            'dziNz78I',
            'mdSGyQCJ',
            'LjcVpmDL',
            'LjcVpmDL',
            'fPXNHpm1',
            'HTTbwRmM',
            'B5yTkMQi',
            '8N0FThqG',
            'm8rfQBvl',
            'fc1oZCE0',
            'UgffRkOn',
            '7ugX7bm0',
            '9CQBGUeJ' 
        ])