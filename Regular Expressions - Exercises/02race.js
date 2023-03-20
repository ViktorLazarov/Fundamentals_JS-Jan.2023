function race(input) {
    let racersObj = {};
    let racers = input.shift().split(', ');
    let patternName = /[A-Za-z]/g;
    let patternDistance = /\d/g;

    for (const racer of racers) {
        racersObj[racer] = 0;
    }

    for (const line of input) {
        if (line === 'end of race') {
            break;
        }
        let name = line.match(patternName).join('');
        let distance = line.match(patternDistance).map(Number).reduce((a, c) => a + c);
        if (racersObj.hasOwnProperty(name)) {
            racersObj[name] += distance;
        }
    }

    let sorted = Object.entries(racersObj).sort((a, b) => b[1] - a[1]);
    let first = sorted[0][0];
    let second = sorted[1][0];
    let third = sorted[2][0];
    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);

}




race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])