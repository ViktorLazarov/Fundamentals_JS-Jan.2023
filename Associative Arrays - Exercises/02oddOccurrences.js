function counter(data) {
    let dataArr = data.split(' ').map(x => x.toLowerCase());
    let obj = new Map();

    for (const elem of dataArr) {
        if (!obj.has(elem)) {
            obj.set(elem, 1);
        } else {
            obj.set(elem, obj.get(elem) + 1);
        }
    }

    let result = Array.from(obj).filter(a => a[1] % 2 !== 0);
    let resultStr = '';
    for (const [key, value] of result) {
        resultStr += key + ' ';
    }
    console.log(resultStr);

}


counter('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log('***************');
counter('Cake IS SWEET is Soft CAKE sweet Food')