const palindromes = function (string) {
    let string1 = "";
    let string2 = "";

    const regex = /\W/;

    const strArray = string.split("");
    let newStrArray = []

    strArray.map((char) => {
        if (!regex.test(char)) {
            newStrArray.push(char);
            string1 += char;
        }
    })

    for (let i = 0; i < newStrArray.length; i++) {
        string2 += newStrArray[(newStrArray.length - 1)- i];
    }

    string1 = string1.toLocaleLowerCase();
    string2 = string2.toLocaleLowerCase();

    if (string1 === string2) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
