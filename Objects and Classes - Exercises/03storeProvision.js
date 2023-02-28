function store(currentStock, storeOrder) {


    let storeStock = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        storeStock[currentStock[i]] = Number(currentStock[i + 1]);
    }


    for (let j = 0; j < storeOrder.length; j += 2) {
        let name = storeOrder[j];
        let quantity = Number(storeOrder[j + 1]);
        if (Object.keys(storeStock).includes(name)) {
            storeStock[name] += quantity;
        } else {
            storeStock[name] = quantity;
        }

    }

    // console.table(storeStock);
    for (const key in storeStock) {
        console.log(`${key} -> ${storeStock[key]}`);
    }

}


store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)