function adAstra(data) {
    let pattern = /([#|\|]{1})(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let totalCalories = 0;
    let outputItems = '';
    
    let matches = Array.from(data[0].matchAll(pattern));
    for (const match of matches) {
        let item = match.groups.item;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        outputItems += `Item: ${item}, Best before: ${date}, Nutrition: ${calories}\n`
    }

    let days = Math.floor(totalCalories/2000);
    
    console.log(`You have food to last you for: ${days} days!`);
    console.log(outputItems);
    
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])