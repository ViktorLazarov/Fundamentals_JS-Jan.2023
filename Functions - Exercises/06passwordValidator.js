function passwordValidator(password) {
    let validLength = checkLength(password);
    let validChars = validateChars(password);
    let validNumberOfNumbers = countNumberOfNumbers(password);

    printMessage(validLength, validChars, validNumberOfNumbers);

    // Print Message for the User
    function printMessage(validLength, validChars, validCountOfNumbers) {
        if (!validLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!validChars) {
            console.log("Password must consist only of letters and digits");
        }
        if (!validCountOfNumbers) {
            console.log("Password must have at least 2 digits");
        }
        if (validLength && validChars && validCountOfNumbers) {
            console.log("Password is valid");
        }
    }


    // "Password must have at least 2 digits"
    function countNumberOfNumbers(password) {
        let count = 0;
        for (const char of password) {
            let num = char.charCodeAt(0);
            let isNumber = checkForNumbers(num);
            if (isNumber) {
                count++;
            }
        }

        if (count >= 2) {
            return true
        }
        return false
    }

    // "Password must consist only of letters and digits"
    function validateChars(password) {
        for (const char of password) {
            let num = char.charCodeAt(0);
            let isNumber = checkForNumbers(num);
            let isLowerCase = checkForLowerCase(num);
            let isUpperCase = checkForUpperCase(num);
            if (!isNumber && !isLowerCase && !isUpperCase) {
                return false;
            }

        }
        return true;
    }

    // "Password must be between 6 and 10 characters"
    function checkLength(password) {
        return password.length >= 6 && password.length <= 10
    }


    // Helper Functions 
    function checkForLowerCase(char) {
        return char >= 97 && char <= 122
    }
    function checkForUpperCase(char) {
        return char >= 65 && char <= 90

    }
    function checkForNumbers(char) {
        return char >= 48 && char <= 57
          
    }
}



passwordValidator('login')
console.log('********************');
passwordValidator('Mypass123')
console.log('********************');
passwordValidator('Pas$ss$')
