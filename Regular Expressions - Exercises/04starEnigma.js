function starEnigma(input) {
    let messageCount = Number(input.shift());
    let starCountPattern = /[STARstar]/g;
    // let attackedPlanets = 0;
    // let destroyedPlanets = 0;
    let attackedPlanetsList = [];
    let destroyedPlanetsList = [];
    let planetPattern = /(?<=@)(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)!(?<type>[A|D])!->(?<count>\d+)/;
    // let planetPattern = /(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)!(?<type>[AD])!->(?<count>\d+)/;
    
    
    for (const line of input) {
        let starCount = line.match(starCountPattern).length;
        let newMessage = '';
        for (let i = 0; i < line.length; i++) {
            let newChar = String.fromCharCode(line.charCodeAt(i)-starCount);
            newMessage += newChar;
        }
        if (planetPattern.test(newMessage)) {
            let match = newMessage.match(planetPattern);
            if (match.groups.type === 'A') {
                // attackedPlanets ++;
                attackedPlanetsList.push(match.groups.name)
            } else if(match.groups.type === 'D'){
                // destroyedPlanets ++;
                destroyedPlanetsList.push(match.groups.name)
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanetsList.length}`);
    if (attackedPlanetsList.length) {
        for (const planet of attackedPlanetsList.sort((a,b) => a.localeCompare(b))) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedPlanetsList.length}`);
    if (destroyedPlanetsList.length) {
        for (const planet of destroyedPlanetsList.sort((a,b) => a.localeCompare(b))) {
            console.log(`-> ${planet}`);
        }
    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])
starEnigma(['3',

"tt(''DGsvywgerx>6444444444%H%1B9444",

'GQhrr|A977777(H(TTTT',

'EHfsytsnhf?8555&I&2C9555SR'])