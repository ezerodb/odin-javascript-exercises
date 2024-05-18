const repeatString = function(word, num) {
    let i = 0;
    let phrase = '';

    while (i < num) {
        phrase = `${phrase + word}`;
        i++;
    }

    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
