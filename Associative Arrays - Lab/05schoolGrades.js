function schoolGrades(data) {
    let students = {};

    for (const elem of data) {
        let name = elem.split(' ')[0];
        let grades = elem.split(' ').splice(1);
       if (!students.hasOwnProperty(name)) {
            students[name] = grades;
       } else {
            for (const grade of grades) {
                students[name].push(grade);
            }
       }
    }
    let result = {};
    for (const key in students) {
        result[key] = (students[key].reduce((a,c) => a + Number(c),0))/students[key].length;
    }
    let sortedKeys = Object.keys(result).sort((a,b) => a.localeCompare(b))
    for (const iterator of sortedKeys) {
        console.log(`${iterator}: ${result[iterator].toFixed(2)}`);
    }

}



schoolGrades(['Lilly 4 6 6 5',
              'Tim 5 6',
              'Tammy 2 4 3',
              'Tim 6 6'])

schoolGrades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3'])