function wordCounter(data) {
    let counter = new Map();
    for (const word of data) {
        if (!counter.has(word)) {
            counter.set(word, 1)
        } else {
            counter.set(word, counter.get(word)+1)
        }
    }
    let sorted = Array.from(counter).sort((a,b) => b[1]- a[1])
    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

wordCounter(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"])