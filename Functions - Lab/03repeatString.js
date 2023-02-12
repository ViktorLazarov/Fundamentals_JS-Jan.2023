function repeatStr(str, number) {
    let output = '';
    for (let i = 0; i < number; i++) {
        output += str;

    }
    return output;
}


console.log(repeatStr('abv', 3));
console.log(repeatStr('String', 3));
