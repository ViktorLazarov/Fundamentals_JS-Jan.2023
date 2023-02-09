function solve(num, decimals) {
    if (decimals > 15) {
        decimals = 15;
    }
    console.log(parseFloat(num.toFixed(decimals)));
}


solve(10.5, 3);