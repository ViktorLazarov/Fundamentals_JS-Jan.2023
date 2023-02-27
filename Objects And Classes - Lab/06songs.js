function songs(inputArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = inputArr.shift();
    let typeListFilter = inputArr.pop();
    let printArr = [];
    for (const elem of inputArr) {
        let [typeList, name, time] = elem.split('_');
        let song = new Song(typeList, name, time);

        if (typeListFilter === 'all' || typeListFilter === song.typeList ) {
            printArr.push(song.name)
        }
    }

    console.log(printArr.join('\n'));
}

songs([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'favourite'])