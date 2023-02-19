function chatLogger(inputArr) {
    let result = [];
    let operations = inputArr.shift().split(' ');
    let command = operations[0];
    let message;
    if (command === 'Spam') {
        message = operations.slice(1);
    } else {
        message = operations[1]; 

    }
    let editedMessage = operations[2];  

    while (command !== 'end') {
        switch (command) {
            case 'Chat': chat(result, message); break;
            case 'Delete': deleteFunc(result, message); break;
            case 'Edit': edit(result, message, editedMessage); break;
            case 'Pin': pin(result,message); break;
            case 'Spam': spam(result,message); break;
        }
        operations = inputArr.shift().split(' ');
        command = operations[0];
        if (command === 'Spam') {
            message = operations.slice(1);
        } else {
            message = operations[1];
        }
        editedMessage = operations[2];
    }
    console.log(result.join('\n'));


    function chat(result, value) {
        result.push(value);
    }

    function deleteFunc(result, value) {
        if (result.includes(value)) {
            result.splice(result.indexOf(value),1);
        }
    }

    function edit(result, value,editedMessage) {
        if (result.includes(value)) {
            result.splice(result.indexOf(value), 1, editedMessage);
        }
    }
    
    function pin(result, value) {
        if (result.includes(value)) {
            let buffer = result.splice(result.indexOf(value),1);
            result.push(buffer[0]);
        }
    }

    function spam(result,value) {
        for (const el of value) {
            result.push(el);
        }
    }

}


// chatLogger((["Chat Hello",
//              "Chat darling",
//              "Edit darling Darling",
//              "Spam how are you",
//              "Delete Darling",
//              "end"]))
// console.log('*****************');
// chatLogger(["Chat Hello",
//              "Delete John",
//              "Pin Hi",
//              "end"])
console.log('*****************');
chatLogger(["Spam Let's go to the zoo",
            "Chat John",
            "Edit zoo cinema",
            "Chat tonight",
            "Pin John",
            "end"])
