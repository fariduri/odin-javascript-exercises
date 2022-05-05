const caesar = function(string, shift) {
    let encodedString = '';

    function encodeToCeaser (unicode, shift)
    {
        let encodedChar;
        if ((unicode > 64 && unicode <= 90) || (unicode > 96 && unicode <= 122 ))
        {
            let shifted = unicode + shift;
            if ((unicode <= 90 && shifted > 90) || (unicode <= 122 && shifted > 122))
                shifted -= 26;
            else if ((unicode > 64 && shifted < 64) || (unicode > 96 && shifted < 96))
                shifted += 26;
            
            encodedChar = String.fromCharCode(shifted);
        }
        else
            encodedChar = String.fromCharCode(unicode);

        return encodedChar;
    }

    for (let idx = 0; idx < string.length; idx++)
        encodedString += encodeToCeaser(string.charCodeAt(idx), shift);

    return encodedString;
};

// Do not edit below this line
module.exports = caesar;
