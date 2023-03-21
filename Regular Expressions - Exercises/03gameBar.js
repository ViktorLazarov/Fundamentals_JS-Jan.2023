function gameBar(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/;
    let totalIncome = 0;
    for (let line of input) {
        let match = [];
        if (line === 'end of shift') {
            break;
        }

        if (pattern.test(line)) {
            match = line.match(pattern);
            let name = match.groups.name;
            let product = match.groups.product;
            let count = match.groups.count;
            let price = match.groups.price;
            let totalPrice = count * price;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;

        }

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}


gameBar(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])
gameBar(['%InvalidName%<Croissant>|2|10.3$','%Peter%<Gum>1.3$','%Maria%<Cola>|1|2.4','%Valid%<Valid>valid|10|valid20$','end of shift'] )