function inventory(data) {
    let heroesData = [];
    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    for (const line of data) {
        let [name, level, items] = line.split(' / ');
        let hero = new Hero(name, level, items);
        heroesData.push(hero);
    }
    heroesData.sort((heroA, heroB) => heroA.level - heroB.level)
    for (const hero of heroesData) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${Number(hero.level)}`);
        console.log(`items => ${hero.items}`);
    }
}


inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])