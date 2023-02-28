function towns(inputArr) {
    class Town{
        constructor(town, latitude,longitude){
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    for (let i = 0; i < inputArr.length; i++) {
        let townName = inputArr[i].split(' | ')[0];
        let latitude = Number(inputArr[i].split(' | ')[1]).toFixed(2);
        let longitude = Number(inputArr[i].split(' | ')[2]).toFixed(2);
        
        // let town = {
        //     town: townName,
        //     latitude: latitude,
        //     longitude: longitude,
        // }
        // console.log(town);

        let town = new Town(townName, latitude, longitude)
        console.log(JSON.parse(JSON.stringify(town)));
    }
    

}


towns(['Sofia | 42.696552 | 23.32601',

       'Beijing | 39.913818 | 116.363625'])