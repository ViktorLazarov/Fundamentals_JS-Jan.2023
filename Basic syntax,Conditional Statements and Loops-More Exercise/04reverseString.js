function solve(input) {
    let str = input.toString();
    let reversed = '';
    for (let i = str.length-1; i >= 0 ; i--) {
        reversed += str[i];
        
    }
    console.log(reversed);
}

solve('Pesho')
solve('Hello')
solve(1234)