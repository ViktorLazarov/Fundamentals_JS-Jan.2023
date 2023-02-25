function convertToObj(inputStr) {
    let person = JSON.parse(inputStr)
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')