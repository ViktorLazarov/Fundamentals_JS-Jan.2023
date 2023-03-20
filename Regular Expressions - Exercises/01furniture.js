function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log('Bought furniture:');
    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }

        if (pattern.test(line)) {
            let product = pattern.exec(line);
            let price = Number(product.groups.price);
            let quantity = Number(product.groups.quantity);
            let name = product.groups.name;
            let totalPrice = price * quantity;
            totalMoney += totalPrice;
            console.log(name);
        }


    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase'])