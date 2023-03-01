function catalogue(inputArr) {
    let catalogueObj = {};
    for (const line of inputArr) {
        catalogueObj[line.split(' : ')[0]] = line.split(' : ')[1];
    }
    let keys = Object.keys(catalogueObj).sort((a,b) => a.localeCompare(b));
    
    let firstChar = "";
    for (const key of keys) {
        let name = key;
        let price = catalogueObj[key];

        if (firstChar !== name[0]) {
            console.log(name[0]);
            firstChar = name[0];
        }
        console.log(`   ${name}: ${price}`);

    }
}


catalogue([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])