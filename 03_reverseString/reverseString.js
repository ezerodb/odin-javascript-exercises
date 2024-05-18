const reverseString = function(string) {
    const splitString = string.split("");
    const stringLength = splitString.length;
    let reversed = '';

    for (let i = 0; i < stringLength; i++) {
        reversed = `${reversed + splitString[(stringLength - i) - 1]}`;
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
