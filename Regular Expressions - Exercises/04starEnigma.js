function starEnigma(input) {
    let messageCount = Number(input.shift());
    let starCountPattern = /[STARstar]/g;
    
    let attackedPlanetsList = new Set();
    let destroyedPlanetsList = new Set();
    
    let planetPattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;
    
    
    for (const line of input) {
        let starCount = 0;
        let match = starCountPattern.exec(line);
        
        while (match !== null) {
            starCount ++;
            match = starCountPattern.exec(line);
        }
        

        let newMessage = '';
        for (let i = 0; i < line.length; i++) {
            let newChar = String.fromCharCode(line.charCodeAt(i)-starCount);
            newMessage += newChar;
        }
        
        if (planetPattern.test(newMessage)) {
            let match = newMessage.match(planetPattern);

            if (match.groups.type === 'A') {
                attackedPlanetsList.add(match.groups.name)

            } else if(match.groups.type === 'D'){
                destroyedPlanetsList.add(match.groups.name)
                
            }
        }
    }
    console.log(`Attacked planets: ${attackedPlanetsList.size}`);
    
    if (attackedPlanetsList.size) {
        for (const planet of Array.from(attackedPlanetsList).sort((a,b) => a.localeCompare(b))) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedPlanetsList.size}`);
    if (destroyedPlanetsList.size) {
        for (const planet of Array.from(destroyedPlanetsList).sort((a,b) => a.localeCompare(b))) {
            console.log(`-> ${planet}`);
        }
    }
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])
starEnigma(['3',

"tt(''DGsvywgerx>6444444444%H%1B9444",

'GQhrr|A977777(H(TTTT',

'EHfsytsnhf?8555&I&2C9555SR'])