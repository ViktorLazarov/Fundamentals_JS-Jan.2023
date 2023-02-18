function main(inputArr) {
    let food = Number(inputArr[0]) * 1000;
    let hay = Number(inputArr[1]) * 1000;
    let cover = Number(inputArr[2]) * 1000;
    let weigth = Number(inputArr[3]) * 1000;

    console.log(food, hay, cover, weigth);
    
}

main((["10","5","5.2","1"]))