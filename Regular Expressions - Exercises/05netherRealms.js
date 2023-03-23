function netherRealms(input) {
    let names = input.split(/\s*,\s*/);

    let healthPattern = /[^0-9+\-*\/\.,\s]/g; ///(?<health>[^0-9+\-\*\/\.])/g;
    let damagePattern = /[+|-]?\d+(\.?\d+)*/g;  //(?<damage>[\-+]*[\d]+(\.[\d]+)*)/g
    let operationPatern = /[*|\/]/g;

    let demons = [];
    class Demon {
        constructor(name, health,damage){
            this.name = name;
            this.health = health;
            this.damage = damage;
        }
    }
    
    for (const name of names) {
        let health = 0;
        let damage = 0;
        let charsArr = [];

        let healthMatch = healthPattern.exec(name)
        let index = 0;
        while (healthMatch !== null) {
            charsArr.push(healthMatch[0]);
            let charValue = charsArr[index].charCodeAt(0);
            health += charValue;
            healthMatch = healthPattern.exec(name)
            index++;
        }

        let damageMatch = damagePattern.exec(name);
        while (damageMatch !== null) {
            damage += Number(damageMatch[0]);

            damageMatch = damagePattern.exec(name);
        }
        let operationMatch = operationPatern.exec(name)
        while (operationMatch !== null) {
            if (operationMatch[0] === '*') {
                damage *= 2;
            } else if (operationMatch[0] === '/') {
                damage /= 2;
            }
            operationMatch = operationPatern.exec(name)
        }
       
        let demonObj = new Demon(name, health,damage)
        demons.push(demonObj);     
    }
    demons.sort((demonA, demonB) => demonA.name.localeCompare(demonB.name))
    
    for (const demon of demons) {
        console.log(`${demon.name} - ${demon.health} health, ${demon.damage.toFixed(2)} damage`);
    }

}

netherRealms('M+3ph-0.5s-0.5t0.0**')
// netherRealms('M3ph1st0**, Azazel')