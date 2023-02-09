function solve(n, m) {
    let output = '';
    let sum = 0;
    for (let i = n; i <= m; i++) {
        output += i + ' ';
        sum += i;

        
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}

solve(5, 10)
solve(0, 26)
solve(50, 60)
