function main(inputArr) {
    let food = Number(inputArr[0]) * 1000;
    let hay = Number(inputArr[1]) * 1000;
    let cover = Number(inputArr[2]) * 1000;
    let weigth = Number(inputArr[3]) * 1000;

    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (i % 2 === 0) {
            hay = hay - (food * 0.05);
        }
        if (i % 3 === 0) {
            cover = cover - (weigth / 3)
        }
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
        console.log('Merry must go to the pet store!');
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
    }

}

main((["10", "5", "5.2", "1"]))
main((["9","5","5.2","1"]))
main((["1","1.5","3","1.5"]))