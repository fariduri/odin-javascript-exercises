const caesar = function(string, shift) {
    let encodedString = '';

    function encodeToCeaser (unicode, shift)
    {
        let shifted = unicode + shift;
        shifted -= (shifted > 90) ? 25 : 0;
        let encodedChar = String.fromCharCode(shifted);

        return encodedChar;
    }

    for (let idx = 0; idx < string.length; idx++)
        encodedString += encodeToCeaser(string.charCodeAt(idx), shift);

    return encodedString;
};

// Do not edit below this line
module.exports = caesar;
