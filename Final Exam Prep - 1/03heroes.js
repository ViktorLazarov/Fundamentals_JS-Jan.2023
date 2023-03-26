function heroes(inputArr) {
    let heroesCount = Number(inputArr.shift());
    let heroesList = new Map();
    class Hero {
        constructor(name, hp, mana) {
            this.name = name;
            this.hp = hp;
            this.mana = mana;
        }
    }



    for (let i = 0; i < heroesCount; i++) {
        let tokens = inputArr.shift().split(' ');
        let name = tokens[0];
        let values = tokens.slice(1);
        let hp = Number(values[0]);
        let mana = Number(values[1]);
        let hero = new Hero(name, hp, mana);
        heroesList.set(name, hero);
    }
    for (const line of inputArr) {
        let tokens = line.split(' - ');
        let command = tokens[0];
        let values = tokens.slice(1);
        switch (command) {
            case 'Heal': {
                let [heroName, amount] = values;
                heal(heroName, Number(amount), heroesList);
                break;
            }
            case 'Recharge': {
                let [heroName, amount] = values;
                recharge(heroName, Number(amount), heroesList);
                break;
            }
            case 'CastSpell': {
                let [heroName, mpNeeded, spellName] = values;
                let heroMana = heroesList.get(heroName).mana;
                castSpell(heroName, heroMana, Number(mpNeeded), spellName, heroesList);
                break;
            }
            case 'TakeDamage': {
                let [heroName, damage, attacker] = values;
                takeDamage(heroName, Number(damage), attacker, heroesList);
                break;
            }
            case 'End': {
                end(heroesList);
                return;
            }




        }
    }


    function castSpell(heroName, heroMana, mpNeeded, spellName, heroMap) {
        if (heroMana >= mpNeeded) {
            heroMana = heroMana - mpNeeded;
            heroMap.get(heroName).mana = heroMana;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroMana} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }
    function takeDamage(heroName, damage, attacker, heroesList) {
        let currentHP = heroesList.get(heroName).hp;
        if (currentHP - damage > 0) {
            currentHP -= damage;
            heroesList.get(heroName).hp = currentHP;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHP} HP left!`);
        } else {
            heroesList.delete(heroName);
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }
    function heal(heroName, amount, heroesMap) {
        let healedAmount = Math.min(100 - heroesMap.get(heroName).hp, amount);
        heroesMap.get(heroName).hp += healedAmount;
        console.log(`${heroName} healed for ${healedAmount} HP!`);
    }
    function recharge(heroName, amount, heroesMap) {
        let recharedAmount = Math.min(200 - heroesMap.get(heroName).mana, amount);
        heroesMap.get(heroName).mana += recharedAmount;
        console.log(`${heroName} recharged for ${recharedAmount} MP!`);
    }
    function end(heroesList) {
        let heroesArr = heroesList.values();
        
        for (const hero of heroesArr) {
            let name = hero.name;
            let hp = hero.hp;
            let mp = hero.mana;
            console.log(`${name}\n  HP: ${hp}\n  MP: ${mp}`);
        }
    }


}

heroes(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])

    console.log('****************');
heroes(['4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'])