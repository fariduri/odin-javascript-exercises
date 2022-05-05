const caesar = function(string, shift) {
    let encodedString = '';

    function encodeToCeaser (unicode, shift)
    {
        let factor = (shift > 26) ? 26 * Math.floor(shift/26) : 0;

        if ((unicode > 64 && unicode <= 90) || (unicode > 96 && unicode <= 122 ))
            {
                let shifted = unicode + shift;
                if ((unicode <= 90 && shifted > 90) || (unicode <= 122 && shifted > 122))
                    shifted -= 26 + factor;
                else if ((unicode > 64 && shifted < 64) || (unicode > 96 && shifted < 96))
                    shifted += 26 + factor;
                
                encodedChar = String.fromCharCode(shifted);
            }
            else
                encodedChar = String.fromCharCode(unicode);
        

        return encodedChar;
    }
    
    for (let idx = 0; idx < string.length; idx++)
        encodedString += encodeToCeaser(string.charCodeAt(idx), shift);

    return encodedString;
    /** 72 + 75 = 147
     *  147 - 26 = 121
     *  121 -26 = 95
     *  95 - 26 = 69
     * 
     * 
     */
};

// Do not edit below this line
module.exports = caesar;


/** 1 2 3 4 5 6 7 8 9 
 * 9+9 =18-9 = 9
 * 9 + 10 = 19 -9 = 10-9 1
 */