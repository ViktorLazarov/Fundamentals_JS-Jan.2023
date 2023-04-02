function messagesManager(input) {
    let capacity = Number(input.shift());
    let map = new Map();


    class User {
        constructor(userName, send, received) {
            this.userName = userName;
            this.send = send;
            this.received = received;
        }
    }
    for (const line of input) {
        let tokens = line.split('=');
        let command = tokens[0];
        let values = tokens.slice(1);
        debugger
        switch (command) {
            case 'Add': {
                let name = values[0];
                let send = Number(values[1]);
                let received = Number(values[2]);
                let user = new User(name, send, received);
                map.set(name, user);
                break;
            }

            case 'Message': {
                let sender = values[0];
                let receiver = values[1];
                if (map.has(sender) && map.has(receiver)) {
                    map.get(sender).send += 1;
                    if ((map.get(sender).send + map.get(sender).received) >= capacity) {
                        console.log(`${map.get(sender).userName} reached the capacity!`);
                        map.delete(sender);
                    }
                    map.get(receiver).received += 1;
                    if ((map.get(receiver).send + map.get(receiver).received) >= capacity) {
                        console.log(`${map.get(receiver).userName} reached the capacity!`);
                        map.delete(receiver);
                    }
                }
                break;
            }
            case 'Empty': {
                let userName = values[0];
                if (map.has(userName)) {
                    map.delete(userName);
                }
                if (userName === 'All') {
                    map = new Map();
                }
                break;
            }
            case 'Statistics': {
                console.log(`Users count: ${map.size}`);
                for (let [key, value] of map) {
                    console.log(`${key} - ${value.send + value.received} `);
                }
                break;
            }
        }
    }

}




// messagesManager((["10",

//     "Add=Berg=9=0",

//     "Add=Kevin=0=0",

//     "Message=Berg=Kevin",

//     "Add=Mark=5=4",

//     "Statistics"]))

// messagesManager((["20",

//     "Add=Mark=3=9",

//     "Add=Berry=5=5",

//     "Add=Clark=4=0",

//     "Empty=Berry",

//     "Add=Blake=9=3",

//     "Add=Michael=3=9",

//     "Add=Amy=9=9",

//     "Message=Blake=Amy",

//     "Message=Michael=Amy",

//     "Statistics"]))

messagesManager(['12', 'Add=Bonnie=3=5', 'Add=Johny=4=4', 'Empty=All', 'Add=Bonnie=3=3', 'Statistics'])