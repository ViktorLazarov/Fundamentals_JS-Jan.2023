function mirrorWords(arr) {
    let input = arr.shift();
    let pattern = /([@#])(?<leftWord>[A-Za-z]{3,})\1\1(?<rightWord>[A-Za-z]{3,})\1/g;
    let matches = Array.from(input.matchAll(pattern));
    let pairCount = matches.length;
    let mirrorWordsCount = 0;
    let mirrorWordsList = [];
    for (const match of matches) {
        let leftWord = match.groups.leftWord;
        let rightWord = match.groups.rightWord;
        let reversedRightWord = rightWord.split('').reverse().join('');
        if (leftWord === reversedRightWord) {
            mirrorWordsCount++;
            mirrorWordsList.push(`${leftWord} <=> ${rightWord}`)
        }


    }

    if (!pairCount) {
        console.log(`No word pairs found!`);
        console.log(`No mirror words! `);
    } else {
        console.log(`${pairCount} word pairs found!`);
        if (!mirrorWordsCount) {
            console.log(`No mirror words! `);
        }else {
            console.log(`The mirror words are:\n${mirrorWordsList.join(', ')}`);
        }
    }

    
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])