function pascalCaseSplitter(input) {
    let pattern = /[A-Z][a-z]*/g;
    let matches = [...input.matchAll(pattern)];
    console.log(matches.join(', '));


}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')