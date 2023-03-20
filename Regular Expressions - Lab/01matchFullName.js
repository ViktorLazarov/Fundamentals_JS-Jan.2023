function matchFullName(input) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    // let result = input.match(regex);

    // console.log(result.join(' '));
    let result = [];
    let validName = regex.exec(input);
    while (validName !== null) {
        result.push(validName);
        validName = regex.exec(input);
    }
    console.log(result.join(' '));
    
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")