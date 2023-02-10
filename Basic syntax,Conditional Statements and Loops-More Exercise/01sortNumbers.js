function solve(a, b , c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a);
            console.log(b);
            console.log(c);
        } else {
            console.log(a);
            console.log(c);
            console.log(b);
        }
    }else if (b > a && b > c){
        if (a > c) {
            console.log(b);
            console.log(a);
            console.log(c);
        }else {
            console.log(b);
            console.log(c);
            console.log(a);
        }
    }else if (c > a && c > b) {
        if (b > a) {
            console.log(c);
            console.log(b);
            console.log(a);
        }else {
            console.log(c);
            console.log(a);
            console.log(b);
        }
    }
}

solve(3, 1, 5);
console.log('**********************');
solve(-2, 1, 3);
console.log('**********************');
solve(0, 0, 2);