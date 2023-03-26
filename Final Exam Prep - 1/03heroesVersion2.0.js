function heroes(inputArr) {
    let heroesCount = Number(inputArr.shift());
    let heroesList = new Map();
    function createHero(heroName, heroHp, heroMana) {
        let hero = {
            name: heroName,
            hp: heroHp,
            mana: heroMana,
            castSpell2(mpNeeded, spellName){
                if (this.mana >= mpNeeded) {
                    this.mana -= mpNeeded;
                    console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mana} MP!`);
                }else {
                    console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
                }
            },
            takeDamage2(damage, attacker){
                this.hp -= damage;
                if (this.hp > 0 ) {
                    console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
                } else {
                    console.log(`${this.name} has been killed by ${attacker}!`);
                    heroesList.delete(this.name);
                }
            },
            recharge2(amount){
                let rechargedAmount = Math.min(200 - this.mana, amount); 
                this.mana += rechargedAmount;
                console.log(`${this.name} recharged for ${rechargedAmount} MP!`);
            },
            heal2(amount){
                let healedAmount = Math.min(100 - this.hp, amount); 
                this.hp += healedAmount;
                console.log(`${this.name} healed for ${healedAmount} HP!`);
            },
            print(){
                console.log(`${this.name}\n  HP: ${this.hp}\n  MP: ${this.mana}`);
            },
        }
        return hero;
    }

    for (let i = 0; i < heroesCount; i++) {
        let tokens = inputArr.shift().split(' ');
        let name = tokens[0];
        let hp = Number(tokens[1]);
        let mana = Number(tokens[2]);
        let hero = createHero(name, hp, mana);
        heroesList.set(name, hero);
    }
    for (const line of inputArr) {
        let tokens = line.split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let values = tokens.slice(2);
        
        switch (command) {
            case 'CastSpell': {
                let hero = heroesList.get(name);
                let mpNeeded = Number(values[0]);
                let spellName = values[1];
                hero.castSpell2(mpNeeded, spellName);
                break;
            }
            case 'TakeDamage': {
                let hero = heroesList.get(name);
                let damage = Number(values[0]);
                let attacker = values[1];
                hero.takeDamage2(damage, attacker);
                break;
            }
            case 'Heal':{
                let hero = heroesList.get(name);
                let amount = Number(values[0]);
                hero.heal2(amount);
                break;
            }
            case 'Recharge': {
                let hero = heroesList.get(name);
                let amount = Number(values[0]);
                hero.recharge2(amount);
                break;
            }
            case 'End':{
                for (const hero of heroesList.values()) {
                    hero.print();
                }
            }
                
                
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