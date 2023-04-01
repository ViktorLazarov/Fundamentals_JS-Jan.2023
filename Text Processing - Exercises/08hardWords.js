function hardWords(input) {
    let text = input[0].split(' ');
    let words = input[1];
    
    for (let i = 0; i < text.length; i++) {
        if (text[i].startsWith('_')) {
            if (!text[i].endsWith('_')) {
                let lastSymbol = text[i][text[i].length-1]
                for (let j = 0; j < words.length; j++) {
                    if (text[i].length - 1 === words[j].length) {
                        text[i] = words[j] + lastSymbol;
                    }
                }
            }else {
                for (let j = 0; j < words.length; j++) {
                    if (text[i].length === words[j].length) {
                        text[i] = words[j];
                    }
                    
                }
            }

        }
    }
    console.log(text.join(' '));
    
}


hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])