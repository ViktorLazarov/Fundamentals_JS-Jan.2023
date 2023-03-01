function dictionary(inputArr) {
    let collection = {};
    for (const line of inputArr) {
        let obj = JSON.parse(line);
        let key = Object.keys(obj);
        collection[key[0]] = obj[key[0]];
    }

    let collectionKeys = Object.keys(collection).sort((a,b) => a.localeCompare(b));
    for (let i = 0; i < collectionKeys.length; i++) {
        console.log(`Term: ${collectionKeys[i]} => Definition: ${collection[collectionKeys[i]]}`);
    }

    
}


dictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burningapparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'
    ]
    )
console.log('***************************');
dictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
    '{"Watermelon":"The large fruitof a plant of the gourd family, with smooth green skin, red pulp, and watery juice."}',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."}',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such aspainting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}'
    ])