function treasureHunt(inputArr) {
    let state = inputArr.shift().split('|');

    let command = inputArr.shift();
    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        switch (action) {
            case 'Loot':
                for (const el of tokens) {
                    if (state.includes(el)) {
                        continue;
                    }
                    state.unshift(el);
                } break;
            case 'Drop':
                let index = Number(tokens[0]);
                if (index < 0 || index > state.length - 1) {
                    command = inputArr.shift();
                    continue;
                }
                let el = state.splice(index, 1);
                state.push(el);
                break;
            case 'Steal':
                let count = Number(tokens[0]);
                let elements = state.splice(-count);
                console.log(elements.join(', '));
                break;

        }
        command = inputArr.shift();
    }
    if (state.length === 0){
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        for (const el of state) {
            sum += el.length;
        }
        let avg = sum / state.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }


}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

    "Loot Wood Gold Coins",

    "Loot Silver Pistol",

    "Drop 3",

    "Steal 3",

    "Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])