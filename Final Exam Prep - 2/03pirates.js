function pirates(data) {
    let towns = new Map();

    class Town {
        constructor(townName, townPopulation, townGold) {
            this.name = townName;
            this.population = townPopulation;
            this.gold = townGold;
        }
    }

    for (let i = 0; i < data.length; i++) {
        let line = data.shift();
        if (line === 'Sail') {
            break;
        }
        let name = line.split('||')[0];
        let population = Number(line.split('||')[1]);
        let gold = Number(line.split('||')[2]);
        let town = new Town(name, population, gold);

        if (!towns.has(name)) {
            towns.set(name, town)
        }else {
            let addPopulation = towns.get(name).population + population;
            towns.get(name).population = addPopulation;
            let addGold = towns.get(name).gold + gold;
            towns.get(name).gold = addGold;
        }

    }
    for (const line of data) {
        let tokens = line.split('=>');
        let command = tokens[0];
        let values = tokens.slice(1);
        switch (command) {
            case 'Plunder': {
                let townName = values[0];
                let killedPopulation = Number(values[1]);
                let stolenGold = Number(values[2]);

                console.log(`${townName} plundered! ${stolenGold} gold stolen, ${killedPopulation} citizens killed.`);
                
                let currentPopulation = towns.get(townName).population;
                currentPopulation -= killedPopulation;
                towns.get(townName).population = currentPopulation;
                
                let currentGold = towns.get(townName).gold;
                currentGold -= stolenGold;
                towns.get(townName).gold = currentGold;
                
                if (currentPopulation === 0 || currentGold === 0) {
                    console.log(`${townName} has been wiped off the map!`);
                    towns.delete(townName);
                }
                break;
            }
            case 'Prosper': {
                let town = values[0];
                let addedGold = Number(values[1])
                if (addedGold <= 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    break;
                }
                let currentGold = towns.get(town).gold;
                currentGold += addedGold;
                towns.get(town).gold = currentGold;
                console.log(`${addedGold} gold added to the city treasury. ${town} now has ${currentGold} gold.`);

                break;
            }
            case 'End': {
                if (!towns.size) {
                    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
                    return;
                }
                console.log(`Ahoy, Captain! There are ${towns.size} wealthy settlements to go to:`);
                for (const town of towns) {
                    
                    console.log(`${town[1].name} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`);
                }
                return;
            }

        }
    }

}

// pirates(["Tortuga||345000||1250",

//     "Santo Domingo||240000||630",

//     "Havana||410000||1100",

//     "Sail",

//     "Plunder=>Tortuga=>75000=>380",

//     "Prosper=>Santo Domingo=>180",

//     "End"])

pirates(["Nassau||95000||1000",

    "San Juan||930000||1250",

    "Campeche||270000||690",

    "Port Royal||320000||1000",

    "Port Royal||100000||2000",

    "Sail",

    "Prosper=>Port Royal=>-200",

    "Plunder=>Nassau=>94000=>750",

    "Plunder=>Nassau=>1000=>150",

    "Plunder=>Campeche=>150000=>690",

    "End"])