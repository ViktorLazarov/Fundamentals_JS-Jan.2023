function meetings(inputArr) {
    let schedule = {};

    for (const elem of inputArr) {
        let day = elem.split(' ')[0];
        let name = elem.split(' ')[1];
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`); 
        }
    }

    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])