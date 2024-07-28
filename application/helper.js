function transformString(inputString) {
    let swappedString = '';
    for (let char of inputString) {
        if (char === char.toLowerCase()) {
            swappedString += char.toUpperCase();
        } else if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char; // leave other characters unchanged
        }
    }

    return swappedString.split('').reverse().join('');
}

module.exports = {
    transformString
};

