function mirrorWords(input) {
    let pattern = /([@#])(?<leftWord>[A-Za-z]{3,})\1\1(?<rightWord>[A-Za-z]{3,})\1/g;
    let matches = [...input.matchAll(pattern)];
    
    for (const match of matches) {
        console.log(match.groups.leftWord);
        console.log(match.groups.rightWord);

    }

    
}

mirrorWords('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r')