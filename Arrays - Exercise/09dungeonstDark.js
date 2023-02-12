function dungeon(input) {
    let rooms = input[0].split('|');
    let health = 100;
    let coins = 0;
    let roomNumber = 1;

    for (const iterator of rooms) {
        let command = iterator.split(' ')[0];
        let amount = Number(iterator.split(' ')[1]);

        switch (command) {
            case 'potion':
                if (amount + health > 100) {
                    amount = amount - ((amount + health) - 100)
                }
                health += amount;
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`); break;
            case 'chest': coins += amount;
                console.log(`You found ${amount} coins.`); break;
            default:
                health -= amount;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                    // console.log(`Current health: ${health} hp.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomNumber}`);
                    return;
                }
        }
        roomNumber++;
    }
    if (health > 0) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }


}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log("**************************");
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])