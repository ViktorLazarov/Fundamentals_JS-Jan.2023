function maxSequence(arr) {
    let longestStart = 0;
    let LongestLength = 1;
    let currentStart = 0;
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > LongestLength) {
                LongestLength = currentLength;
                longestStart = currentStart;
            }
            currentStart = i;
            currentLength = 1;
        }
        
    }

    if (currentLength > LongestLength) {
        LongestLength = currentLength;
        longestStart = currentStart;
    }
    return arr.slice(longestStart, longestStart + LongestLength).join(' '); 
}

console.log(maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]));
console.log(maxSequence([4, 4, 4, 4]));