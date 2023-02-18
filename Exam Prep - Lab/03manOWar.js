function manOWar(inputArr) {
    let pirateShip = inputArr[0].split('>').map(x => Number(x));
    let warShip = inputArr[1].split('>').map(x => Number(x));
    let maxCapacity = Number(inputArr[2]);
    let commands = inputArr.slice(3);

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ')[0];   //map(Number);
        let values = commands[i].split(' ').slice(1).map(x => Number(x));
        switch (command) {
            case 'Fire': fire(warShip, values[0], values[1]); break;
            case 'Defend': defende(pirateShip, values[0], values[1], values[2]); break;
            case 'Repair': repair(pirateShip, values[0], values[1], maxCapacity); break;
            case 'Status': status(pirateShip, maxCapacity); break;
            case 'Retire': {
                console.log(`Pirate ship status: ${pirateShip.reduce((sum, current) => sum + current, 0)}`);

                console.log(`Warship status: ${warShip.reduce((sum, current) => sum + current, 0)}`);
                break;
            }

        }
        if (isShipDead(warShip)) {
            console.log('You won! The enemy ship has sunken.');
            break;
        }
        if (isShipDead(pirateShip)) {
            console.log('You lost! The pirate ship has sunken.');
            break;
        }
    }

    function isShipDead(ship) {
        let deadSections = ship.filter(x => x <= 0)
        return deadSections.length > 0;
    }

    function fire(warship, index, damage) {
        if (index >= 0 && index < warship.length) {
            warship[index] -= damage;
        }
    }

    function defende(pirateship, startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex < pirateship.length && endIndex >= 0 && endIndex < pirateship.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateship[i] -= damage;
                // if (pirateship[i] < 0) {
                //     console.log('You lost! The pirate ship has sunken.');
                //     return;
                // }

            }
        }

    }

    function repair(pirateship, index, healAmount, maxHealth) {
        if (index >= 0 && index < pirateship.length) {
            let missingHealth = maxHealth - pirateship[index];
            pirateship[index] += Math.min(missingHealth, healAmount);
        }
    }

    function status(pirateship, maxHealth) {
        let damagedSections = pirateship.filter(x => x < (maxHealth * 0.2));
        console.log(`${damagedSections.length} sections need repair.`);
    }

}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18", "70",
    "Fire 2 11", "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
console.log('********************');
manOWar((["2>3>4>5>2",

    "6>7>8>9>10>11",

    "20",

    "Status",

    "Fire 2 3",

    "Defend 0 4 11",

    "Repair 3 18",

    "Retire"]))