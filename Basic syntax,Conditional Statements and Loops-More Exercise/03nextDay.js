function solve(year, month, day) {
    let tomorrow = new Date(year, month - 1, day + 1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`);
}

solve(2002, 9, 30)
solve(2020, 3, 24)