function solve(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        for (let j = 1; j <= i; j++) {
            output += j + ' ';   
        }
        console.log(output.trim());
    }
}

solve(5)