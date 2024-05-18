const removeFromArray = function() {
    const args = Array.from(arguments);
    const list = args.shift();

    let newArray = [];

    for (const item of list) {
        let add = [];
        for (const arg of args) {
            if (arg !== item) {
                add.push(true);
            } else {
                add.push(false);
            }
        }
        if (add.includes(false)) {
            continue;
        } else {
            newArray.push(item);
        }
        add = [];
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
