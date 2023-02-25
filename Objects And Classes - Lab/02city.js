function city(inputObj) {
    for (const key in inputObj) {
        console.log(`${key} -> ${inputObj[key]}`);
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})