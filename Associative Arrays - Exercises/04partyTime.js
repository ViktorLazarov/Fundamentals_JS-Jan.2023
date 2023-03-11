function partyTime(data) {
    let partyList = {
        'vip': [],
        'regular': [],
    };
    let command = data.shift();

    while (command !== 'PARTY') {
        if (!isNaN(command[0])) {
            partyList.vip.push(command);
        } else {
            partyList.regular.push(command);
        }
        command = data.shift()
    }
    
   
    for (const guest of data) {
        if (!isNaN(guest[0])) {   
            partyList.vip.splice(partyList.vip.indexOf(guest),1);
            
        }else {
            partyList.regular.splice(partyList.regular.indexOf(guest),1);
        }
    }
    
    let size = partyList.vip.length + partyList.regular.length;
    console.log(size);
    for (const vipGuest of partyList.vip) {
        console.log(vipGuest);
    }
    for (const regGuest of partyList.regular) {
        console.log(regGuest);
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