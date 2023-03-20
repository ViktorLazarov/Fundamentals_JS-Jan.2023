function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    // let result = input.match(pattern);

    // console.log(result.join(' '));
    let result = [];
    let validName = pattern.exec(input);
    
    while (validName !== null) {
        result.push(validName);
        validName = pattern.exec(input);
    }
    console.log(result.join(' '));
    
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")