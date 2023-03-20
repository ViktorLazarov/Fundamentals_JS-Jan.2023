function matchDates(input) {
    let dates = input[0];
    let pattern = /\b(?<day>\d{2})(?<delimiter>[-\/.])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})\b/g;

    let validDate = pattern.exec(dates);
    while (validDate !== null) {
        let day = validDate.groups.day;
        let month = validDate.groups.month;
        let year = validDate.groups.year;
        
        validDate = pattern.exec(dates);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }


}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016'])