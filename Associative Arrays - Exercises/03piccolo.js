function piccolo(data) {
    let parkingLot = new Set();

    for (const line of data) {
        let direction = line.split(', ')[0];
        let carNumber = line.split(', ')[1];
        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    }
    
    let sorted = Array.from(parkingLot).sort();

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (const carNum of sorted) {
            console.log(carNum);
        }
    }

    
}


piccolo(['IN, CA2844AA',

         'IN, CA1234TA',

         'OUT, CA2844AA',

         'IN, CA9999TT',

         'IN, CA2866HI',

         'OUT, CA1234TA',

         'IN, CA2844AA',

         'OUT, CA2866HI',

         'IN, CA9876HH',

         'IN, CA2822UU'])
console.log('******************');
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])