function gameBar(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%(?:[^\|$%.])*<(?<product>[A-Z][a-z]+)>(?:[^\|$%.])*\|(?<count>\d+)\|(?:[^\|$%.0-9])*(?<price>[0-9.]+)\$/;
    let totalIncome = 0;
    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }

        if (pattern.test(line)) {
            let order = pattern.exec(line);
            let name = order.groups.name;
            let product = order.groups.product;
            let count = order.groups.count;
            let price = order.groups.price;
            let totalPrice = count * price;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;

        }

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}


gameBar(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])
gameBar(['%InvalidName%<Croissant>|2|10.3$','%Peter%<Gum>1.3$','%Maria%<Cola>|1|2.4','%Valid%<Valid>valid|10|valid20$','end of shift'] )