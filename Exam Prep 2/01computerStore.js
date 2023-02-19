function computerStore(inputArr) {
    let sum = 0;
    let command = inputArr.shift();

    while (command !== 'special') {
        if (command === 'regular') {
            break;
        }
        let price = Number(command);
        if (price < 0) {
            console.log('Invalid price!');
            command = inputArr.shift();
            continue;
        }
        sum += price;
        command = inputArr.shift();
    }
    
    if (sum === 0) {
        console.log('Invalid order!');
    } else {
        let taxes = sum * 0.2;
        let totalPrice = sum * 1.2;
        let discount = 0;
        if (command === 'special') {
            discount = totalPrice * 0.1;
            totalPrice -= discount;
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }


}

computerStore(['1050','200','450','2','18.50','16.86','special'])
computerStore(['1023','15','-20','-5.50','450','20','17.66','19.30','regular'])
computerStore(['regular'])