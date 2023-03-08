function wordsTracker(data) {
    let words = data.shift().split(' ');
    let sentence = new Map();

    for (const word of words) {
        sentence.set(word, 0)
    }

    for (const word of data) {
        if (sentence.has(word)) {
            sentence.set(word, sentence.get(word) + 1)
        }
    }
    let sorted = Array.from(sentence).sort((a,b) => b[1]-a[1])

    for (const [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

}


wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])

wordsTracker([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence'])