function solve() {
    for (let i = 3; i <= 100; i+=3) {
       console.log(i);   
    }
}

function solve2() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
        
    }
}
solve();
solve2();