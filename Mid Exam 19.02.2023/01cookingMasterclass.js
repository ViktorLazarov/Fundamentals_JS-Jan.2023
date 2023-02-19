function cookingMasterclass(inputArr) {
    let budget = inputArr.shift()*100;
    let students = inputArr.shift();
    let flourPrice = inputArr.shift()*100;
    let eggPrice = inputArr.shift()*100;
    let apronPrice = inputArr.shift()*100;
    let freePackages = 0;
    if (students >= 5) {
        freePackages = Math.floor((students - (students - (students / 5))));
    }


    let totalPrice = (flourPrice * (students - freePackages)) +
        (eggPrice * (10 * students)) +
        (apronPrice * (Math.ceil(students * 1.2)));

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${(totalPrice/100).toFixed(2)}$.`);
    } else {
        console.log(`${((totalPrice/100) - (budget/100)).toFixed(2)}$ more needed.`);
    }

}

// cookingMasterclass([50, 2, 1.0, 0.1, 10.0]);
// cookingMasterclass([100, 25, 4.0, 1.0, 6.0]);
// cookingMasterclass([946, 20, 12.05, 0.42, 27.89])
cookingMasterclass([946, 21, 12.05, 0.42, 27.89])