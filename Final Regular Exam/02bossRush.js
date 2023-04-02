function bossRush(input) {
    let inputs = Number(input.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;

    let matches = [];
    for (const line of input) {
        let match = line.match(pattern)
        if (match) {
            console.log(`${match.groups.name}, The ${match.groups.title}`);
            console.log(`>> Strength: ${match.groups.name.length}`);
            console.log(`>> Armor: ${match.groups.title.length}`);
        } else {
            console.log(`Access denied!`);
        }

    }


}

// bossRush((['3',

//     '|PETER|:#Lead architect#',

//     '|GEORGE|:#High Overseer#',

//     '|ALEX|:#Assistant Game Developer#']))

bossRush((['3',

    '|STEFAN|:#H1gh Overseer#',

    '|IVAN|:#Master detective#',

    '|KARL|: #Marketing lead#']))