function solve(numberOfPeople, groupType, dayOfWeek) {
    let price = 0;
    let totalSum = 0;
    if (groupType == 'Students') {
        if (dayOfWeek == 'Friday') {
            price = 8.45;
        } else if (dayOfWeek == 'Saturday') {
            price = 9.80;
        } else if (dayOfWeek == 'Sunday') {
            price = 10.46;
        }
        totalSum = numberOfPeople * price;
        if (numberOfPeople >= 30) {
            totalSum *= 0.85;
        }

    } else if (groupType == 'Business') {
        if (dayOfWeek == 'Friday') {
            price = 10.90;
        } else if (dayOfWeek == 'Saturday') {
            price = 15.60;
        } else if (dayOfWeek == 'Sunday') {
            price = 16;
        }
        totalSum = numberOfPeople * price;
        if (groupType == 'Business' && numberOfPeople >= 100) {
            totalSum = ((numberOfPeople - 10) * price);
        }
    } else if (groupType == 'Regular') {
        if (dayOfWeek == 'Friday') {
            price = 15;
        } else if (dayOfWeek == 'Saturday') {
            price = 20;
        } else if (dayOfWeek == 'Sunday') {
            price = 22.50;
        }
        totalSum = numberOfPeople * price;
        if (groupType == 'Regular' && (numberOfPeople >= 10 && numberOfPeople <= 20)) {
            totalSum *= 0.95;
        }

    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}

solve(30, 'Students', 'Sunday');
solve(40, 'Regular', 'Saturday');